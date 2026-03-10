function start(){
print("\nGood Morning! you just woke up.");
print("\nTo get out of bed, type start");

function processInput(input){
if (input.toLowerCase() === "start") {
bedroom();
} else {
print("\nSorry this game is case sensitive. Make sure you are typing the exact word that is written");
print("To get out of bed, type Start");
}
}

waitForInput(processInput);
}
function bedroom() {
bedroomDiscovered = true;
print("\nYour are out of bed. You have to complete all the tasks ino order to get to school.");
print("\nYou may have somre extra time but make sure you dont get too side tracked or you will miss the bus");
print("\nWhat would you like to do? Type your choice in the space");
print("\nGet back in bed");
print("\nBrush teeth");
print("\neat breakfast");
print("\npick out outfit");
print("\nget dressed");

















}
