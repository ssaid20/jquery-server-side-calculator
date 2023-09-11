const express = require('express'); // Require the express module.
const math = require('mathjs'); // Require the mathjs module.
const history = require('./modules/history');
const app = express(); // Create an express application.
const port = 3000; // Define the port on which the server will be running.

app.use(express.static('server/public')); // Serve static files from the 'server/public' directory.
app.use(express.urlencoded({ extended: true })); // Use the urlencoded parser middleware.

app.post('/calculate', (req, res) => {
    const expression = req.body.expression; // Get the expression from the request body.
    let result;
    try {
        result = math.evaluate(expression); // Evaluate the expression using the mathjs library.
        history.push({expression, result}); // Add the expression and result to the history.
        res.send({ result: result }); // Send the result as a response.
    } catch (error) {
        res.status(400).send({ error: 'Bad Request' }); 
    }
});

app.get('/history', (req, res) => {
    res.send(history); // Send the history as a response.
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Log a message indicating that the server is running.
});

