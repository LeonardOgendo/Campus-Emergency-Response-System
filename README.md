> **NOTE**: This repository is no longer maintained and is kept for historical reference only. A new standard version is being built from scratch in a separate repository. If you wish to continue developing this code, I recommend you fork it.

---

## CERS

### Overview
CERS is a cross-platform web application 
designed to enhance campus safety by providing real-time emergency reporting, 
responder coordination, and instant alerts. Built with React (frontend) and Django (backend) 
using DRF for API communication, CERS ensures that emergencies are reported, assigned, and tracked efficiently.

---

### Key Features

- One-click emergency reporting with automatic GPS location.

- Priority-based emergency assignment (High, Medium, Low).

- Live responder updates.

- Custom React Admin Dashboard for real-time monitoring & analytics.


---

### Tech Stack

- `Frontend`: React, Bootstrap, CSS

- `Backend`: Django (Django REST Framework for API communication)

- `Database`: PostgreSQL -- SQLite for development

- `APIs & Services`: Twilio (Emergency Calls)

---

### Installation Guide

Follow these steps to setup CERS locally:

1. Clone Repository

```bash
git clone https://github.com/LeonardOgendo/CERS.git
cd CERS
```

<br>

2. Backend Setup (Django)

```bash
cd backend
virtualenv venv  # Create a virtual environment
source venv/bin/activate    # Activate environemt (Linux)
pip install -r requirements.txt    # Install dependencies
python3 manage.py migrate  # Apply migrations
python3 manage.py runserver   # Start backend server
```
<br>

3. Frontend Setup (React)

```bash
cd frontend
# For both interfaces
npm install   # Install dependencies
npm run dev   # Start development server
```

<br>

4. Configure Environment Variables

Create a `.env` file for Django & React, specifying Twilio credentials,
database configs, and API keys.


---


