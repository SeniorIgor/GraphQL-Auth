const app = require('./server/server');

const PORT = process.env.PORT || 4000;

function start() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at the port ${PORT}`);
    });
  } catch (err) {
    console.log('Server error:', err.message);
    process.exit(1);
  }
}

start();
