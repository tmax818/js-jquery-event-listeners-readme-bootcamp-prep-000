function getIt() {
  $('p').on("click", function() {
    alert('Hey!');
    return;
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('input').on("keydown", function(key) {
    {
  if (key.which == 13){
    alert('enter was pressed');
  }
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
