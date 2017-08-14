

var loop = function(i){
  if (i % 3 ===0 && i % 5===0){
    return "pingpong";
  }
    else if (i % 3 ===0 ) {
    return "ping" ;
  }
  else if (i % 5 ===0 ) {
    return "pong";
  }
  else {
    return i;
  }
};

var output = function(ivy){
  var results = [];
  for(var i = 1; i<=ivy; i++) {
    results.push(loop(i));
  }
  return results;
}


$(document).ready (function() {
  $(".refresh-btn").on("click", function(){location.reload();});
   $("#submit").click(function(){
     //event.preventDefault();

     var userInput = parseInt($("#user_input").val());
     var results = output(userInput);
    var outcome = $("#display");

     for(var i=0; i<results.length; i++){
       outcome.append(results[i]);
     }

});

  });
