subscribe.onchange = function() {
  if (this.checked){
    console.log("selected");
      $('#emailField').attr('style', "display: block");
    } else {
      console.log("Not selected");
      $('#emailField').attr('style', "display: none");
    }


    // Advanced Option....
//    x.style.display == "block" ? 
//    x.style.display = "none" : 
//    x.style.display = "block"; 
}

