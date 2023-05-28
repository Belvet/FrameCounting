const sol = [
  { name: "5P", fdOnBlock: -2, startUp: 4 },
  { name: "c.S", fdOnBlock: 3, startUp: 7 },
  { name: "f.S", fdOnBlock: 2, startUp: 10 },
  { name: "5H", fdOnBlock: -5, startUp: 11 },
  { name: "S Volcanic Viper", fdOnBlock: -28, startUp: 9 },
  { name: "Fafnir", fdOnBlock: 11, startUp: 24 },
  
];

const ky = [
  { name: "5P", fdOnBlock: -1, startUp: 5 },
  { name: "c.S", fdOnBlock: 1, startUp: 7 },
  { name: "f.S", fdOnBlock: -5, startUp: 10 },
  { name: "5H", fdOnBlock: -8, startUp: 14 },
  { name: "Vapor Thrust", fdOnBlock: -26, startUp: 11 },
  { name: "Foudre Arc", fdOnBlock: 2, startUp: 24 },
  
];

const getPossibleMoves = function(player0, player1, attackName) {
  const attackMoves = player0;

  const attackMoveUsed = attackMoves.find(move => move.name === attackName);
  const blockValue = attackMoveUsed.fdOnBlock;

  const adjustedStartUp = attackMoves.map(move => {
    return { ...move, startUp: move.startUp - blockValue };
  });

  const lowestStartUp = Math.min(...adjustedStartUp.map(move => move.startUp));

  const availableMoves = player1.filter(move => move.startUp <= lowestStartUp);

  const availableMoveNames = availableMoves.map(move => move.name);

  document.getElementById("result").textContent = `Available moves for use are: ${availableMoveNames}`;
  ;
};





function updateDropdown3Options() {
  var dropdown1Value = document.getElementById("dropdown1").value;
  var dropdown2Value = document.getElementById("dropdown2").value;
  var dropdown3 = document.getElementById("dropdown3");

    // Remove existing options
    dropdown3.innerHTML = "";

    // Add options based on selected values in dropdown1 and dropdown2
    if (dropdown1Value === "sol") {
      // If "Sol Badguy" is selected in both dropdown1 and dropdown2
      dropdown3.add(new Option("S Volcanic Viper", "S Volcanic Viper"));
      dropdown3.add(new Option("Fafnir", "Fafnir"));
    } else if (dropdown1Value === "ky") {
      // If "Ky Kiske" is selected in both dropdown1 and dropdown2
      dropdown3.add(new Option("Foudre Arc", "Foudre Arc"));
      dropdown3.add(new Option("Vapor Thrust", "Vapor Thrust"));
    } else {
      // Default options when other combinations are selected
      dropdown3.add(new Option("Default Option 1", "default1"));
      dropdown3.add(new Option("Default Option 2", "default2"));
    }

}




function getPossibleMoves1() {
  var dropdown1Value = document.getElementById("dropdown1").value;
  var dropdown2Value = document.getElementById("dropdown2").value;
  var dropdown3Value = document.getElementById("dropdown3").value;

// Define the variable to be passed based on dropdown1Value
var playerVariable;
if (dropdown1Value === "sol") {
  playerVariable = sol;
} else if (dropdown1Value === "ky") {
  playerVariable = ky;
} else {
  // Handle the default case or display an error message
  console.log("Invalid Value");
  return; // or handle the error accordingly
}

var player2Variable;
if (dropdown2Value === "sol") {
  player2Variable = sol;
} else if (dropdown2Value === "ky") {
  player2Variable = ky;
} else {
  // Handle the default case or display an error message
  console.log("Invalid Value");
  return; // or handle the error accordingly
}


  // Use the dropdown values as arguments for the getPossibleMoves() function
  console.log(getPossibleMoves(playerVariable, player2Variable, dropdown3Value))
}


  
