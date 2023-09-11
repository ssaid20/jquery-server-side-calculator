const express = require('express'); // Require the express module.
const math = require('mathjs'); // Require the mathjs module.
const app = express(); // Create an express application.
const port = 3000; // Define the port on which the server will be running.

let history = []; // Create an array to store the history of calculations.

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
        res.status(400).send({ error: 'Bad Request' }); // Send a 'Bad Request' error if the expression could not be evaluated.
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});