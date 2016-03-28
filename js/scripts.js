$(document).ready(function() {

var flavors=["chocolate", "coffee", "silly"];
flavors.forEach(function(flavor){
// result location are names oddly based on madlibs example not a great solution
  $("." + flavor).append(flavor);
});

  event.preventDefault();
});
