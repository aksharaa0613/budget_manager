# Budget Planner - Complete Deployment Guide

## Backend Deployment (Render)

### 1. Prepare Backend
1. Push your backend code to GitHub
2. Ensure `package.json` has correct start script: `"start": "node index.js"`

### 2. MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create account and new cluster (free tier)
3. Create database user with read/write permissions
4. Whitelist all IPs: `0.0.0.0/0`
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/budgetplanner`

### 3. Deploy to Render
1. Go to [Render](https://render.com/)
2. Create account and connect GitHub
3. Click "New Web Service"
4. Select your backend repository
5. Configure:
   - **Name**: `budget-planner-api`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Any random 32+ character string
   - `NODE_ENV`: `production`
7. Deploy and note your backend URL: `https://budget-planner-api.onrender.com`

## Frontend Deployment (Vercel)

### 1. Update API URL
In `mernFrontend2025/src/components/functionalComponents/Hooks/useFetch.jsx`:
```javascript
const API_BASE_URL = 'https://your-render-backend-url.onrender.com/api';
```
Replace with your actual Render backend URL.

### 2. Deploy to Vercel
1. Push frontend code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your frontend repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Deploy

## Testing Deployment

### Backend Test
Visit: `https://your-backend-url.onrender.com/`
Should return: `{"message": "Budget Planner API is running!"}`

### Frontend Test
1. Visit your Vercel URL
2. Sign up for new account
3. Create a budget
4. Add expenses
5. Check dashboard

## Environment Variables Summary

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/budgetplanner
JWT_SECRET=your_super_secret_jwt_key_minimum_32_characters
PORT=5000
```

### Frontend
No environment variables needed. API URL is configured in code.

## Troubleshooting

### Common Issues
1. **CORS Error**: Backend CORS is configured for all origins
2. **Database Connection**: Check MongoDB Atlas IP whitelist and credentials
3. **API Not Found**: Verify backend URL in frontend useFetch.jsx
4. **Build Fails**: Check all dependencies are in package.json

### Render Specific
- First deploy may take 5-10 minutes
- Free tier sleeps after 15 minutes of inactivity
- Check logs in Render dashboard for errors

### Vercel Specific
- SPA routing handled by vercel.json
- Build errors shown in deployment logs
- Automatic deployments on git push