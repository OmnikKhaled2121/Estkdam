import { createServer, Model, Response } from "miragejs";
import {
  employees,
  professions,
  nationalities,
  countries,
  manager,
  notifications,
  statistics,
  seedOrders,
} from "./fixtures";

export function makeServer({ environment = "development" } = {}) {
  // Deep-clone orders so each server instance gets fresh state
  let orders = JSON.parse(JSON.stringify(seedOrders));
  let nextOrderId = 200;

  let server = createServer({
    environment,

    routes() {
      // Match the real API base URL so axios requests are intercepted
      this.urlPrefix = "https://estikdam.jacadix.net";
      this.namespace = "/api";

      // Allow unhandled requests to pass through (e.g. flagcdn, randomuser)
      this.passthrough("https://flagcdn.com/**");
      this.passthrough("https://randomuser.me/**");
      this.passthrough();

      // ── Auth ──────────────────────────────────────────

      this.post("/login", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        if (body.email && body.password) {
          return {
            access_token: "mock-jwt-token-" + Date.now(),
            manager: { ...manager, email: body.email },
          };
        }
        return new Response(401, {}, { message: "بيانات الدخول غير صحيحة" });
      });

      this.post("/register", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        return {
          access_token: "mock-jwt-token-" + Date.now(),
          manager: {
            ...manager,
            id: 2,
            name: body.name,
            email: body.email,
            phone: body.phone,
          },
        };
      });

      // ── Contacts ──────────────────────────────────────

      this.post("/contacts", () => {
        return { message: "تم إرسال رسالتك بنجاح" };
      });

      // ── Employees ─────────────────────────────────────

      this.get("/employees", (schema, request) => {
        let result = [...employees];
        const params = request.queryParams;

        if (params.profession) {
          result = result.filter((e) => e.profession === params.profession);
        }
        if (params.nationality) {
          result = result.filter(
            (e) => e.nationality.name === params.nationality
          );
        }
        if (params.min_experience_years) {
          result = result.filter(
            (e) => e.experience_years >= Number(params.min_experience_years)
          );
        }
        if (params.max_experience_years) {
          result = result.filter(
            (e) => e.experience_years <= Number(params.max_experience_years)
          );
        }
        if (params.age_min) {
          const maxBirthYear = new Date().getFullYear() - Number(params.age_min);
          result = result.filter(
            (e) => new Date(e.date_of_born).getFullYear() <= maxBirthYear
          );
        }
        if (params.age_max) {
          const minBirthYear = new Date().getFullYear() - Number(params.age_max);
          result = result.filter(
            (e) => new Date(e.date_of_born).getFullYear() >= minBirthYear
          );
        }

        return { data: result };
      });

      this.get("/employees/:id", (schema, request) => {
        const id = Number(request.params.id);
        const emp = employees.find((e) => e.id === id);
        if (emp) return emp;
        return new Response(404, {}, { message: "الموظف غير موجود" });
      });

      // ── Orders ────────────────────────────────────────

      this.post("/orders", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        const newOrder = {
          id: nextOrderId++,
          status: body.status || "تحت الطلب",
          created_at: new Date().toISOString(),
          manager_id: body.manager_id,
          employees_ids: body.employees_ids,
        };
        orders.push(newOrder);
        return newOrder;
      });

      this.get("/manager/:id/orders", () => {
        return orders.map((order) => ({
          ...order,
          employeesWithSkills: order.employees_ids.map((empId) => {
            const emp = employees.find((e) => e.id === empId);
            if (!emp) return { id: empId, name: "غير معروف" };
            return {
              id: emp.id,
              name: emp.name,
              image: emp.image_url,
              profession: emp.profession,
              experience_years: emp.experience_years,
              salary: emp.salary,
              nationality: emp.nationality,
              social_status: emp.social_status,
            };
          }),
        }));
      });

      this.delete("/orders/:id", (schema, request) => {
        const id = Number(request.params.id);
        orders = orders.filter((o) => o.id !== id);
        return { message: "تم حذف الطلب بنجاح" };
      });

      // ── Lookups ───────────────────────────────────────

      this.get("/professions", () => professions);

      this.get("/nationalities", () => nationalities);

      this.get("/countries", () => countries);

      // ── Statistics ────────────────────────────────────

      this.get("/statistics", () => {
        return { data: [statistics] };
      });

      // ── Notifications ─────────────────────────────────

      this.get("/notifications/:id", () => notifications);

      // ── Manager update ────────────────────────────────

      this.post("/managers/:id", (schema, request) => {
        // Return updated manager (in real app would merge with DB)
        return { ...manager };
      });
    },
  });

  return server;
}
