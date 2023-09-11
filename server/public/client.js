$(document).ready(onReady); 
function onReady() {
    // Event listeners for button clicks.
    $('#one').on("click", function() {
        $('#display').text($('#display').text() + '1');
    });
    $('#two').on("click", function() {
        $('#display').text($('#display').text() + '2');
    });
    $('#three').on("click", function() {
        $('#display').text($('#display').text() + '3');
    });
    $('#four').on("click", function() {
        $('#display').text($('#display').text() + '4');
    });
    $('#five').on("click", function() {
        $('#display').text($('#display').text() + '5');
    });
    $('#six').on("click", function() {
        $('#display').text($('#display').text() + '6');
    });
    $('#seven').on("click", function() {
        $('#display').text($('#display').text() + '7');
    });
    $('#eight').on("click", function() {
        $('#display').text($('#display').text() + '8');
    });
    $('#nine').on("click", function() {
        $('#display').text($('#display').text() + '9');
    });
    $('#zero').on("click", function() {
        $('#display').text($('#display').text() + '0');
    });
    $('#add').on("click", function() {
        $('#display').text($('#display').text() + ' + ');
    });
    $('#subtract').on("click", function() {
        $('#display').text($('#display').text() + ' - ');
    });
    $('#multiply').on("click", function() {
        $('#display').text($('#display').text() + ' * ');
    });
    $('#divide').on("click", function() {
        $('#display').text($('#display').text() + ' / ');
    });    
    $('#equals').on("click", calculate); // When clicked, the calculate function will be executed.
    $('#clear').on("click", clearInputs); // When clicked, the clearInputs function will be executed.
    getHistory(); // Call the getHistory 
}

$.ajax({
    type: 'POST',
    url: '/calculate',
    data: {expression: expression},
}).then(function(response) {
    console.log('Success:', response);
    $('#display').text(response.result); // Update the display with the result received from the server.
    getHistory(); // Update the history.
}).catch(function(error) {
    console.error('Error:', error);
});




function calculate() {
    let expression = $('#display').text(); // Get the current expression from the display.

    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: {expression: expression},
    }).then(function(response) {
        console.log('Success:', response);
        $('#display').text(response.result); // Update the display with the result received from the server.
        getHistory(); // Update the history.
    }).catch(function(error) {
        console.error('Error:', error);
    });
}

function clearInputs() {
    $('#display').text(''); // Clear the display.
}

function getHistory() {
    $.ajax({
        type: 'GET',
        url: '/history',
    }).then(function(response) {
        let historyDiv = $('#history');
        historyDiv.html(''); // Clear the current history.
        response.forEach(item => {
            historyDiv.html(historyDiv.html() + item.expression + ' = ' + item.result + '<br>'); // Append each item in the history received from the server to the historyDiv.
        });
    });
}
