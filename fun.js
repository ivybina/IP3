$(document).ready (function() {
   $("#submit").submit(function(event){
     event.preventDefault();
      });
     var userInput = parseInt($("#user_input").val());
     var result=loop(userInput);
     $("#display").text(result);


  });

// displayResults.append('<li>'+ result[i]+ '</li>');

var loop = function(userInput) {
 var result= [];
 for(var i = 1; i <= userInput; i+=1) {
  if (((i % 3) === 0) && ((i % 5) === 0)) {
    return result.push("pingpong");
  } else if ((i % 3) === 0) {
    return result.push("Ping");
  }  else if ((i % 5) === 0){
    return result.push("Pong");
  } else {
    return result.push(i);
  }

 }
 return result;
};





























// $(document).ready(function showInput(){
//
//   var select= document.getElementsById('submit');
//  //  var start=0;
//  //  while (start<=select) {
//  //   document.write ("start + <br/>")
//  //   start=start + 1;
//  // }
//
//    for (var i = 0; i <= select; i++){
//
//    user_input += i + "<br>";
//        }
//
// });
// document.getElementById("submit").innerHTML = submit;
//     // document.getElementById("user_input").innerHTML = select;
