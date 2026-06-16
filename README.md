# Atmanam Arogyaved Ayurveda Center - Patient Management System

A modern, real-time patient management system for Ayurvedic wellness centers built with React and Node.js.

## Features

✨ **Core Features:**
- Patient registration and management
- Appointment scheduling
- Prescription tracking
- Payment management
- Real-time updates via WebSockets
- WhatsApp notifications
- Birthday greetings
- Follow-up reminders
- Patient reviews and feedback

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios for API calls
- Socket.io for real-time updates

**Backend:**
- Node.js with Express
- Socket.io for WebSocket communication
- CORS enabled

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hparmar301-creator/docsoft.git
   cd docsoft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Run development server**
   ```bash
   # Terminal 1 - Frontend (http://localhost:5173)
   npm run dev
   
   # Terminal 2 - Backend (http://localhost:5000)
   npm run server
   ```

## Deployment Options

### Option 1: Vercel (Recommended for Frontend)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy

**Deployment URL:** `https://your-app.vercel.app`

### Option 2: Docker

```bash
# Build image
docker build -t ayurveda-app .

# Run container
docker run -p 5000:5000 ayurveda-app
```

### Option 3: Railway.app

1. Connect GitHub repository
2. Railway auto-detects Node.js
3. Add environment variables
4. Deploy

### Option 4: Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Deploy
git push heroku main
```

## Environment Variables

```env
# Backend API Configuration
VITE_API_URL=http://localhost:5000
VITE_WS_URL=ws://localhost:5000

# WhatsApp API
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_TOKEN=your_token

# Database (Optional)
MONGODB_URI=your_mongodb_connection_string
```

## API Endpoints

### Patients
- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get patient by ID
- `POST /api/patients` - Create new patient
- `PUT /api/patients/:id` - Update patient

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment

### Messages
- `GET /api/messages` - Get all messages
- `POST /api/messages` - Send message

## Real-time WebSocket Events

- `patient-added` - New patient registered
- `patient-updated` - Patient information updated
- `appointment-added` - New appointment created
- `appointment-updated` - Appointment details changed
- `message-sent` - New message sent

## Next Steps

- [ ] Add MongoDB for data persistence
- [ ] Implement user authentication
- [ ] Add WhatsApp Business API integration
- [ ] Create admin dashboard
- [ ] Add payment gateway integration
- [ ] Implement email notifications
- [ ] Add SMS notifications
- [ ] Create mobile app

## Support

For issues and questions, please open an issue on GitHub.

## License

MIT License
