var targetNumber = Math.floor((Math.random() * 100) + 10);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;


  var numberOptions = [10, 5, 3, 7];

  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src","assets/images/crystal.jpg");
   
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  };

  $(".crystal-image").on("click", function() {

    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });
