const express = require('express'); // Require the express module.
const history = require('./modules/history');
const app = express(); // Create an express application.
const port = 3000; // Define the port on which the server will be running.

app.use(express.static('server/public')); // Serve static files from the 'server/public' directory.
app.use(express.urlencoded({ extended: true })); // Use the urlencoded parser middleware.

app.post('/calculate', (req, res) => {
    const expression = req.body.expression; // Get the expression from the request body.
    const elements = expression.split(' '); // Split the expression into elements.
    let result;
    try {
        const num1 = parseFloat(elements[0]);
        const operator = elements[1];
        const num2 = parseFloat(elements[2]);

        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.error('Operator not supported');
        }

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
    console.log(`Server is running on port ${port}`); 
});

