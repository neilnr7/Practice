# Practice
# Hackathon Project 🚀

## Structure
- `frontend/` → React UI
- `backend/` → Spring Boot backend
- `ai-service/` → Flask ML microservice
- `database/` → PostgreSQL schema + sample data

## Running Locally
1. Start PostgreSQL → load `database/schema.sql`
2. Backend (Spring Boot): `cd backend && mvn spring-boot:run`
3. AI Service (Flask): `cd ai-service && pip install -r requirements.txt && python app.py`
4. Frontend (React): `cd frontend && npm install && npm start`

## Default Ports
- Frontend: http://localhost:3000
- Backend: http://localhost:8080
- AI Service: http://localhost:5000
- PostgreSQL: localhost:5432
