$(document).ready(function (){
function countInput() {

  var select= document.getElementsById('user_input');

   for (var i = 0; i <= select; i++){

   user_input += i + "<br>";
       }

  }
}

});
document.getElementById("demo").innerHTML = user_input;
    // document.getElementById("user_input").innerHTML = select;
