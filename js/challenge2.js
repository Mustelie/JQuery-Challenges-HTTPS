

    useBilling.onchange = function() {
    var home = $("#home");
      if (this.checked){
        home.attr('value', $("#billing").attr('value'));
        home.attr('disabled', 'true');}
      else {
        home.attr('value', "");
        home.attr('disabled', 'false');}
  
  }