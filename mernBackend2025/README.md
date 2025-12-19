# Budget Planner - Backend API

Node.js/Express REST API for the Budget Planner application.

## Features
- JWT Authentication
- User registration and login
- Budget CRUD operations
- Expense tracking
- MongoDB integration
- CORS enabled

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/budgetplanner
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
```

3. Start development server:
```bash
npm run dev
```

4. Start production server:
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

### Budgets (Protected)
- `GET /api/budgets` - Get user budgets
- `POST /api/budgets` - Create budget
- `PUT /api/budgets/:id` - Update budget
- `DELETE /api/budgets/:id` - Delete budget

### Expenses (Protected)
- `GET /api/expenses` - Get user expenses
- `POST /api/expenses` - Create expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## Deployment to Render

1. Create new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT` (optional, Render sets this automatically)

## MongoDB Atlas Setup

1. Create MongoDB Atlas account
2. Create new cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for production)
5. Get connection string and add to `.env`

## Security Notes
- JWT tokens expire in 30 days
- Passwords are hashed with bcrypt
- CORS is enabled for all origins (configure for production)
- All budget/expense routes require authentication