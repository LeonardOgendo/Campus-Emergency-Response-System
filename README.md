## CERS - Campus Emergency Response System

### 📌 Overview
CERS (Campus Emergency Response System) is a cross-platform web application 
designed to enhance campus safety by providing real-time emergency reporting, 
responder coordination, and instant alerts. Built with React (frontend) and Django (backend) 
using DRF for API communication, CERS ensures that emergencies are reported, assigned, and tracked efficiently.

<br>

### Key Features

✅ One-click emergency reporting with automatic GPS location.

✅ Twilio-triggered emergency calls, SMS, and push notifications to responders.

✅ Priority-based emergency assignment (High, Medium, Low).

✅ Live responder updates (confirmation & estimated time of arrival - ETA).

✅ Custom React Admin Dashboard for real-time monitoring & analytics.

✅ Incident logs & risk-prone area tracking for better security planning.


<br>

### 🛠️ Tech Stack

- `Frontend`: React, Bootstrap, CSS

- `Backend`: Django (Django REST Framework for API communication)

- `Database`: PostgreSQL -- SQLite for development

- `APIs & Services`: Twilio (Emergency Calls)

<br>

### 🚀 Installation Guide

Follow these steps to setup CERS locally:

1. Clone Repository

```
git clone https://github.com/LeonardOgendo/Campus-Emergency-Response-System.git CERS_Project
cd CERS_Project
```

<br>

2. Backend Setup (Django)

```
cd 2-Backend
virtualenv venv  # Create a virtual environment
source venv/bin/activate    # Activate environemt (Linux)
pip install -r requirements.txt    # Install dependencies
python3 manage.py migrate  # Apply migrations
python3 manage.py runserver   # Start backend server
```
<br>

3. Frontend Setup (React)

```
cd 1-Frontend
# For both interfaces
npm install   # Install dependencies
npm run dev   # Start development server
```

<br>

4. Configure Environment Variables

Create a `.env` file for Django & React, specifying Twilio credentials,
database configs, and API keys.


<br>

🚀 CERS - Making Campuses Safer with Technology!

