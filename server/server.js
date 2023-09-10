const express = require('express'); // Require the express module.
const app = express(); // Create an express application.
const port = 3000; // Define the port on which the server will be running.

let history = []; // Create an array to store the history of calculations.

app.use(express.static('server/public')); // Serve static files from the 'server/public' directory.
app.use(express.urlencoded({ extended: true })); // Use the urlencoded parser middleware.

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});