var pingpongLoop = function(userInput) {


var resultOfArray = [];
for(var i = 1; i <= userInput; i += 1) {

  if (((i % 3) === 0) && ((i % 5) === 0)) {
    return resultOfArray.push("pingpong");
  } else if ((i % 3) === 0) {
    return resultOfArray.push("Ping");
  }  else if ((i % 5) === 0){
    return resultOfArray.push("Pong");
  } else {
    return resultOfArray.push(i);
   }
}
return resultOfArray;
}


$(document).ready (function() {
   $("#submit").click(function(event){
     event.preventDefault();
     var userInput = parseInt($("#user_input").val());
     var resultOfArray = pingpongLoop(userInput);
     $("#display").text(resultOfArray);
    });
  });



























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
