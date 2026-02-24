# Estkdam

Estkdam is a recruitment and staffing platform built with React. It allows users to browse employee profiles, request recruitment services, transfer sponsorships (Kafala), track orders, and manage their accounts. The UI is fully RTL (Right-to-Left) for Arabic language support.

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Material UI (MUI) v5** - Component library
- **Axios** - HTTP client for API calls
- **React Hook Form + Joi** - Form handling and validation
- **Emotion** - CSS-in-JS styling
- **stylis-plugin-rtl** - RTL layout support

## Prerequisites

- Node.js >= 18
- npm

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmadmarei/Estkdam.git
   cd Estkdam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/Estkdam/`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is generated in the `dist/` directory.

5. **Preview the production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
Estkdam/
├── public/                  # Static assets (favicon, 404.html for SPA routing)
├── src/
│   ├── assets/              # Images, SVGs, and the Landing component
│   ├── components/          # Reusable UI components
│   │   ├── BackgroundLayout.jsx
│   │   ├── CardsSlider.jsx
│   │   ├── EditProfilePopUp.jsx
│   │   ├── MultiCards.jsx
│   │   ├── NotFound.jsx
│   │   ├── StartingSction.jsx
│   │   └── ...
│   ├── Context/
│   │   └── UserContext.jsx  # Authentication context provider
│   ├── layout/
│   │   ├── routes.jsx       # Route definitions
│   │   ├── Root.jsx         # Root layout (Navbar + Footer)
│   │   ├── Navber.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer
│   │   ├── ProtectedRoute.jsx # Auth guard for protected pages
│   │   └── LoginLayout.jsx  # Layout for auth pages
│   ├── lib/
│   │   └── api.js           # API functions (login, register, employees, orders, etc.)
│   ├── Pages/
│   │   ├── Home.jsx         # Homepage
│   │   ├── Login.jsx        # Login page
│   │   ├── Registeration.jsx # Registration page
│   │   ├── EstkdamRequest.jsx # Request recruitment services
│   │   ├── EstkdamOffices.jsx # Office locations
│   │   ├── KafalaTransfer.jsx # Sponsorship transfer
│   │   ├── EmpProfile.jsx   # Employee profile details
│   │   ├── CompleteOrder.jsx # Order completion
│   │   ├── Trackorders.jsx  # Track orders
│   │   ├── Profile.jsx      # User profile
│   │   ├── ProfileSettings.jsx
│   │   ├── ContactUs.jsx    # Contact form
│   │   ├── CommonQuestions.jsx # FAQ
│   │   ├── EstkdamPolices.jsx # Policies
│   │   ├── EstkdamJourney.jsx # Journey overview
│   │   └── ...
│   ├── sections/            # Page sections (SearchEstkdam, JoinUs, etc.)
│   ├── Utils/               # Utility helpers
│   ├── App.jsx              # Root app component
│   ├── App.css
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment workflow
├── vite.config.js           # Vite configuration (base path: /Estkdam/)
├── package.json
└── .eslintrc.cjs
```

## Routes

| Path | Page | Auth Required |
|------|------|:---:|
| `/` | Home | No |
| `/EstkdamRequest` | Request Services | No |
| `/EstkdamOffices` | Office Locations | No |
| `/KafalaTransfer` | Sponsorship Transfer | No |
| `/KafalaTransfer/:profession` | Sponsorship by Profession | No |
| `/CommonQuestions` | FAQ | No |
| `/EstkdamPolices` | Policies | No |
| `/EstkdamJourney` | Journey | No |
| `/ContactUs` | Contact Form | No |
| `/empProfile/:id` | Employee Profile | No |
| `/MultiCards` | Cards View | No |
| `/TrackOrders` | Track Orders | No |
| `/Profile` | User Profile | Yes |
| `/ProfileSettings` | Profile Settings | Yes |
| `/Login` | Login | No |
| `/Registeration` | Register | No |
| `/CompleteOrder/:id` | Complete Order | Yes |

## Deployment

The project is configured to deploy to **GitHub Pages** via GitHub Actions.

- **Trigger**: Push to the `master` branch or manual dispatch
- **Base path**: `/Estkdam/` (configured in `vite.config.js` and router basename)
- **SPA routing**: A `404.html` in `/public` handles client-side routing redirects

The workflow automatically builds and deploys to GitHub Pages on every push to `master`.

## API

All API calls go through `src/lib/api.js` and communicate with the backend at `https://estikdam.jacadix.net/api`. Key endpoints:

- **Auth**: `/login`, `/register`
- **Employees**: `/employees`, `/employees/:id`
- **Orders**: `/orders`, `/manager/:id/orders`
- **Data**: `/professions`, `/nationalities`, `/countries`, `/statistics`
- **Contact**: `/contacts`
- **Notifications**: `/notifications/:id`

## Notes

- The app is designed for **RTL (Arabic)** using the Almarai font and `stylis-plugin-rtl`
- Authentication tokens are stored in `localStorage` under the `USER` key
- Protected routes redirect unauthenticated users to `/Login`
