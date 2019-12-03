ch3form.onsubmit = function() {
    var fruit = $('[name="fruit"]');
    var standing = $('[name="standing"]');
    var counter = 0;
    for (let i = 0; i < fruit.length;i++){
        if (fruit[i].checked){
            counter = counter + 1
    }
  }
    for (let i = 0; i < fruit.length;i++){
      if (standing[i].checked){
      counter = counter + 1
            }
  }
      if (counter == 2){
        return true
  }
  else{
    alert('Please enter both a standing and a fruit.')
    return false
  }
    

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  }