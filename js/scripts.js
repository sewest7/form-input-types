$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val(); 
    const foodInput = $("#food").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const colorInput = $("#color").val();

    $(".name").append(nameInput);
    $(".food").append(foodInput);
    $(".music").append(musicInput);
    $(".color").append(colorInput);

    $("#answers").show();


  });
});


