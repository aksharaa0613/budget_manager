# Budget Planner - Complete MERN Application

## Project Structure Overview

```
Internship/
├── mernBackend2025/          # Node.js/Express API
│   ├── models/               # MongoDB schemas
│   │   ├── User.js          # User authentication model
│   │   ├── Budget.js        # Monthly budget model
│   │   └── Expense.js       # Expense tracking model
│   ├── controllers/         # Business logic
│   │   ├── authController.js    # Login/signup logic
│   │   ├── budgetController.js  # Budget CRUD operations
│   │   └── expenseController.js # Expense CRUD operations
│   ├── routes/              # API endpoints
│   │   ├── authRoutes.js    # /api/auth routes
│   │   ├── budgetRoutes.js  # /api/budgets routes
│   │   └── expenseRoutes.js # /api/expenses routes
│   ├── middleware/          # Custom middleware
│   │   └── auth.js         # JWT authentication middleware
│   ├── .env                # Environment variables
│   ├── index.js            # Main server file
│   └── package.json        # Dependencies and scripts
│
└── mernFrontend2025/        # React/Vite Frontend
    ├── src/
    │   ├── components/
    │   │   ├── functionalComponents/
    │   │   │   ├── Hooks/   # Custom React hooks
    │   │   │   │   ├── useAuth.jsx    # Authentication logic
    │   │   │   │   ├── useBudget.jsx  # Budget management
    │   │   │   │   ├── useExpense.jsx # Expense management
    │   │   │   │   └── useFetch.jsx   # API configuration
    │   │   │   ├── Dashboard.jsx      # Main dashboard
    │   │   │   ├── Login.jsx         # Login form
    │   │   │   ├── Signup.jsx        # Registration form
    │   │   │   ├── BudgetList.jsx    # Budget management
    │   │   │   ├── AddBudget.jsx     # Create budget form
    │   │   │   ├── AddExpense.jsx    # Create expense form
    │   │   │   ├── Stats.jsx         # Financial statistics
    │   │   │   ├── Navbar.jsx        # Navigation component
    │   │   │   ├── Home.jsx          # Landing page
    │   │   │   └── About.jsx         # About page
    │   │   └── ClassComponents/
    │   │       └── ClassComponent.jsx # Example class component
    │   ├── css/
    │   │   └── style.css     # Application styles
    │   ├── App.jsx           # Main app component with routing
    │   └── main.jsx          # React entry point
    ├── vercel.json           # Vercel deployment config
    └── package.json          # Dependencies and scripts
```

## Key Features Implemented

### Authentication System
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes on both frontend and backend
- Persistent login state with localStorage

### Budget Management
- Create monthly budgets with categories
- View all budgets in organized list
- Delete budgets with confirmation
- Prevent duplicate budgets for same month/year

### Expense Tracking
- Add expenses linked to specific budgets
- Categorize expenses (Food, Transportation, etc.)
- Edit and delete expenses
- View expenses by budget or all together

### Dashboard Analytics
- Real-time budget vs expense calculations
- Visual statistics cards
- Recent budgets and expenses overview
- Remaining budget calculations

### User Experience
- Responsive design for all screen sizes
- Clean, intuitive interface
- Form validation and error handling
- Loading states and user feedback

## Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Custom Hooks** - State management
- **CSS3** - Styling

### Deployment
- **Render** - Backend hosting
- **Vercel** - Frontend hosting
- **MongoDB Atlas** - Database hosting

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Budgets (Protected)
- `GET /api/budgets` - Get user's budgets
- `POST /api/budgets` - Create new budget
- `PUT /api/budgets/:id` - Update budget
- `DELETE /api/budgets/:id` - Delete budget

### Expenses (Protected)
- `GET /api/expenses` - Get user's expenses
- `GET /api/expenses?budgetId=:id` - Get expenses for specific budget
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## Security Features
- Password hashing with salt rounds
- JWT token expiration (30 days)
- Protected API routes with middleware
- Input validation and sanitization
- CORS configuration for cross-origin requests

## Development Workflow
1. Backend development with Express and MongoDB
2. API testing with tools like Postman
3. Frontend development with React and Vite
4. Integration testing between frontend and backend
5. Deployment to production platforms

This is a production-ready MERN stack application with proper authentication, data management, and deployment configuration.