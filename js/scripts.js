$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val(); 
    const food = $("#food").val();
    const music = $("input:radio[name=music]:checked").val();
    const favoriteColor = $("#color").val();

    $(".name").append(nameInput);
    $(".food").append();

    $("#answers").show();


  });
});


