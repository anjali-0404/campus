import http from 'http';
import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

// Start server regardless of database connection status
connectDB().then((connected) => {
  server.listen(PORT, () => {
    const dbStatus = connected ? 'with MongoDB' : 'without MongoDB';
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT} ${dbStatus}`);
  });
}).catch((err) => {
  console.error('Unexpected error:', err);
  server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT} (offline mode)`);
  });
});
