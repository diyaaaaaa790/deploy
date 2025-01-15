const express = require('express'); // Import express
const app = express(); // Create an app
const PORT = 3000; // Port number for your server

// Define what happens when someone visits the home page
app.get('/', (req, res) => {
    res.send('Hello, Kalvians! Your backend server is live!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
