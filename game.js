 // Random number to guess.
  var number = Math.floor((Math.random() * (120 - 19 +1)) + 19);

  // Generates the values for each crystal.
  var blue = Math.floor((Math.random() * 12) + 1);
  var red = Math.floor((Math.random() * 12) + 1);
  var yellow = Math.floor((Math.random() * 12) + 1);
  var green = Math.floor((Math.random() * 12) + 1);

  // Variables
  var guessTotal = 0;
  var wins = 0;
  var losses = 0;
  var currentStreak = 0;
  var longestStreak = 0;

  // Number to Guess
  $(".numberdisplay").html(number);

  // Click for each crystal
  $(".bluecrystal").click(function() {
    update(blue);
  });
  $(".redcrystal").click(function() {
    update(red);
  });
  $(".yellowcrystal").click(function() {
    update(yellow);
  });
  $(".greencrystal").click(function() {
    update(green);
  });
  $(".dropdown").click(function() {
    $(".instructions").toggle("slow");
  })

  //Game reset
  function reset() {
    // New Random number
    number = Math.floor((Math.random() * (120 -19 + 1)) 19);

    // Displays new number
    $(".numberdisplay").html(number);

    // New values for the crystals.
    blue = Math.floor((Math.random() * 12) + 1);
    red = Math.floor((Math.random() * 12) + 1);
    yellow = Math.floor((Math.random() * 12) + 1);
    green = Math.floor((Math.random() * 12) + 1);
    // Resets the total guess to 0.
    guessTotal = 0;
    // Displays the guess total.
    $(".guessdisplay").html(guessTotal);
  };

  //Updates users guess
  function update(color) {
    // Increases depending on crystal color that is clicked
    guessTotal += color;

    // Update total after clicks 
    $(".guessdisplay").empty();
    $(".guessdisplay").append(guessTotal);

    // Shows wins or losses
    if (guessTotal > number) {
      // Adds a loss.
      losses++;
      // Losses
      $("#lossesdisplay").html(losses);
      // Game reset
      reset();
      // Resets streak.
      currentStreak = 0
      // Displays the streak count
      else if (guessTotal == number) {
      // Adds a win.
      wins++;
      // Displays the updated wins.
      $("#winsdisplay").html(wins);
      // Calls the reset function to reset the game.
      reset();
  };