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
  $('input').on("keydown", function() {
    
  })
}

$(document).ready(function(){

getIt();
frameIt();

});
