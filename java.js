

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
       outcome.append('<li>'+ results[i] + '</li>');
     }

});

  });
  // (function($){
  //     var initialContainer = $('.columns'),
  //         columnItems = $('.columns li'),
  //         columns = null,
  //         column = 1; // account for initial column
  //     function updateColumns(){
  //         column = 0;
  //         columnItems.each(function(idx, el){
  //             if (idx !== 0 && idx > (columnItems.length / columns.length) + (column * idx)){
  //                 column += 1;
  //             }
  //             $(columns.get(column)).append(el);
  //         });
  //     }
  //     function setupColumns(){
  //         columnItems.detach();
  //         while (column++ < initialContainer.data('columns')){
  //             initialContainer.clone().insertBefore(initialContainer);
  //             column++;
  //         }
  //         columns = $('.columns');
  //     }
  //
  //     $(function(){
  //         setupColumns();
  //         updateColumns();
  //     });
  // });
