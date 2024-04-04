import { GetAllNationalities, GetAllProfessions } from "../lib/api";

export function handleRequestDropDown(type, item, setValue, currentRequest) {
  let request = { ...currentRequest.current }; // Spread currentRequest to avoid mutation
  setValue && setValue(item.label);
  console.log("Iteeem", item);
  console.log("nationality", item.nationality);
  switch (type) {
    case "العمر":
    case "age":
      request = {
        ...request,
        age_min: item.age_min,
        age_max: item.age_max,
      };
      break;
    case "الخبره":
    case "expre":
      request = {
        ...request,
        min_experience_years: item.min_experience_years,
        max_experience_years: item.max_experience_years,
      };
      break;
    case "الجنسية":
    case "nat":
      request = {
        ...request,
        nationality: item.nationality,
      };
      break;
    case "المهنه":
    case "job":
      request = {
        ...request,
        profession: item.profession,
      };
      break;
    default:
      break;
  }
  return request;
}

export async function handleProfessionDropDown() {
  const { data, status } = await GetAllProfessions();
  //   console.log("proo", data);
  const professions = {};
  if (status) {
    data.forEach((item, index) => {
      professions[index + 1] = {
        label: item.name,
        profession: item.name,
      };
    });
  }
  return professions;
}

export async function handleNationalitiesDropDown() {
  const { data, status } = await GetAllNationalities();
  //   console.log("naaat", data);
  const nationality = {};
  if (status) {
    data.forEach((item, index) => {
      nationality[index + 1] = {
        label: item.name,
        nationality: item.name,
      };
    });
  }
  return nationality;
}
