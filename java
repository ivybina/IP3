$(document).ready (function() {
   $("#submit").submit(function(event){
     event.preventDefault();
      });
     var userInput = parseInt($("#user_input").val());
     var result=loop(userInput);
     $("#display").text(result);


  });
