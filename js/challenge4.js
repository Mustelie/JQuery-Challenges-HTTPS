$('#ch4form').submit(function(event) {
    var validInput = true;
    if ($("#fullname").val().length == 0){
        $("#nameerrormsg").attr('style', 'display: block;'); 
        console.log("name");
        validInput = false;
    }
    else {
        $("#nameerrormsg").attr('style', 'display: none;');

    }

    if ($("#streetaddr").val().length == 0){
        $("#addrerrormsg").attr('style', 'display: block;'); 
        console.log("street");
        validInput = false;
    }
    else {
        $("#addrerrormsg").attr('style', 'display: none;'); 
    }
    if (validInput == false) {
        console.log("not valid");
        event.preventDefault();
    }
    else {
        console.log("valid");
    }
});