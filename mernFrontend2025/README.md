# Budget Planner - Frontend

A React-based budget planning application built with Vite.

## Features
- User authentication (signup/login)
- Create and manage monthly budgets
- Track expenses by category
- Dashboard with financial overview
- Responsive design

## Tech Stack
- React 18
- Vite
- React Router
- Axios
- Custom hooks for state management

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Update API URL in `src/components/functionalComponents/Hooks/useFetch.jsx`:
```javascript
const API_BASE_URL = 'https://your-render-backend-url.onrender.com/api';
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

## Environment Variables
No environment variables needed for frontend (API URL is configured in code).

## Project Structure
- `/src/components/functionalComponents/` - React functional components
- `/src/components/functionalComponents/Hooks/` - Custom React hooks
- `/src/css/` - Stylesheets
- `/public/` - Static assets