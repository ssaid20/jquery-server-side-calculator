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
        $('#display').text($('#display').text() + '+');
    });
    $('#subtract').on("click", function() {
        $('#display').text($('#display').text() + '-');
    });
    $('#multiply').on("click", function() {
        $('#display').text($('#display').text() + '*');
    });
    $('#divide').on("click", function() {
        $('#display').text($('#display').text() + '/');
    });
    $('#equals').on("click", calculate); //When clicked, the calculate function will be executed.
    $('#clear').on("click", clearInputs); //When clicked, the clearInputs function will be executed.
    getHistory(); // Call the getHistory function when the document is ready.
}






