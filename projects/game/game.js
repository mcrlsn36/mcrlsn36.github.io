let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
//Declare your other global variables here
let bedroomDiscovered = true;
let bathroomDiscovered = false;
let kitchenDiscovered = false;
let wardrobeDiscovered = false;

//If you need, add any "helper" functions here


//Make one function for each location
function bedroom() {
    clear();
    bedroomDiscovered = true;
    print("\nYou are out of bed. You have to complete all the tasks inorder to get to school.");
    print("\nYou have some time to do extra things but make sure you dont get too distrcated or you will miss the bus");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tbathroom\n\kitchen\n\wardrobe\bedroom");
    
    function processInput(input){
        if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else {
            stayHere();
            waitThenCall(bedroom);
        }
    }
    waitForInput(processInput);
}

function bathroom() {
    clear();
    print("\nYou are in bathroom!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tbedroom");
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            bedroom();
        } else {
            stayHere();
            waitThenCall(bathroom);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("\nWelcome to Dont Miss The Bus!");
    print("\nYou just woke up,");
    print("\nTo get out of bed, type Start");

function processInput(input){
if (input.toLowerCase() === "start") {
bedroom();
} else {
print("\nSorry this game is case sensitive. Make sure you are typing the exact word that is written");
print("\nTo get out of bed, type Start");
}
}

waitForInput(processInput);
}

