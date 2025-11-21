# Stock Info Dashboard

A modern, full-stack stock information dashboard built with FastAPI, PostgreSQL, React, TypeScript, and Tailwind CSS. Inspired by the TailAdmin template design.

## 🚀 Tech Stack

### Backend
- **FastAPI** - Modern, fast Python web framework
- **PostgreSQL** - Powerful, open source object-relational database
- **SQLAlchemy** - SQL toolkit and ORM
- **Pydantic** - Data validation using Python type annotations

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling
- **React Router** - Declarative routing for React
- **Recharts** - Composable charting library for React
- **Lucide React** - Beautiful & consistent icon toolkit

## 📁 Project Structure

```
stock-info/
├── backend/
│   ├── app/
│   │   ├── models/          # Database models
│   │   ├── routers/         # API routes
│   │   ├── schemas/         # Pydantic schemas
│   │   ├── database.py      # Database configuration
│   │   └── main.py          # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Layout/      # Layout components (Sidebar, Header)
│   │   │   ├── Cards/       # Card components
│   │   │   ├── Charts/      # Chart components
│   │   │   └── Dashboard/   # Dashboard-specific components
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main App component
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- PostgreSQL 15+ (or use Docker)
- Docker & Docker Compose (optional, for containerized setup)

### Option 1: Docker Setup (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd stock-info
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Start all services with Docker Compose:
```bash
docker-compose up -d
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

### Option 2: Manual Setup

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file from example:
```bash
cp .env.example .env
```

5. Update the `.env` file with your PostgreSQL credentials

6. Run the application:
```bash
uvicorn app.main:app --reload
```

The API will be available at http://localhost:8000

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:5173

## 📊 Features

- **Modern Dashboard UI** - Clean, professional dashboard inspired by TailAdmin
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Interactive Charts** - Beautiful charts using Recharts library
- **Real-time Data** - RESTful API for real-time stock data
- **Type Safety** - Full TypeScript support on frontend
- **API Documentation** - Auto-generated API docs with FastAPI
- **Database ORM** - SQLAlchemy for database operations
- **Containerized** - Easy deployment with Docker

## 🎨 Dashboard Components

- **Statistics Cards** - Display key metrics (Revenue, Profit, Users, Sessions)
- **Line Charts** - Revenue & profit overview with dual-line charts
- **Bar Charts** - Weekly sales visualization
- **Data Tables** - Interactive stock listings with real-time updates
- **Sidebar Navigation** - Easy navigation between different sections
- **Header** - Search functionality and user profile

## 🔌 API Endpoints

### Stocks
- `GET /api/stocks/` - Get all stocks
- `GET /api/stocks/{id}` - Get stock by ID
- `POST /api/stocks/` - Create new stock
- `PUT /api/stocks/{id}` - Update stock
- `DELETE /api/stocks/{id}` - Delete stock

### Health Check
- `GET /health` - Check API health status

Visit http://localhost:8000/docs for interactive API documentation.

## 🚀 Development

### Backend Development
```bash
cd backend
uvicorn app.main:app --reload
```

### Frontend Development
```bash
cd frontend
npm run dev
```

### Build for Production

Frontend:
```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=stockinfo
DATABASE_URL=postgresql://user:password@localhost:5432/stockinfo
VITE_API_URL=http://localhost:8000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Design inspired by [TailAdmin](https://tailadmin.com)
- Icons by [Lucide](https://lucide.dev)
- Charts by [Recharts](https://recharts.org)
