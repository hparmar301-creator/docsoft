import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store (replace with database later)
let patients = [];
let appointments = [];
let messages = [];

// REST API Endpoints

// Patients
app.get('/api/patients', (req, res) => {
  res.json(patients);
});

app.post('/api/patients', (req, res) => {
  const newPatient = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  patients.push(newPatient);
  io.emit('patient-added', newPatient);
  res.status(201).json(newPatient);
});

app.get('/api/patients/:id', (req, res) => {
  const patient = patients.find(p => p.id == req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
});

app.put('/api/patients/:id', (req, res) => {
  const patient = patients.find(p => p.id == req.params.id);
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  Object.assign(patient, req.body);
  io.emit('patient-updated', patient);
  res.json(patient);
});

// Appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const newAppointment = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  appointments.push(newAppointment);
  io.emit('appointment-added', newAppointment);
  res.status(201).json(newAppointment);
});

app.put('/api/appointments/:id', (req, res) => {
  const appointment = appointments.find(a => a.id == req.params.id);
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  Object.assign(appointment, req.body);
  io.emit('appointment-updated', appointment);
  res.json(appointment);
});

// Messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const newMessage = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date()
  };
  messages.push(newMessage);
  io.emit('message-sent', newMessage);
  res.status(201).json(newMessage);
});

// WebSocket Events
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });

  // Real-time appointment updates
  socket.on('appointment-change', (data) => {
    io.emit('appointment-change', data);
  });

  // Real-time patient updates
  socket.on('patient-change', (data) => {
    io.emit('patient-change', data);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
