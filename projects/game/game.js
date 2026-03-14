let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
//Declare your other global variables here
let bedroomDiscovered = true;
let bathroomDiscovered = false;
let kitchenDiscovered = false;
let wardrobeDiscovered = false;
let bedroom2Discovered = false;

//If you need, add any "helper" functions here


//Make one function for each location
function bedroom() {
    clear();
    bedroomDiscovered = true;
    print("\nYou are out of bed. You have to complete all the tasks inorder to get to school.");
    print("\nYou have some time to do extra things but make sure you dont get too distrcated or you will miss the bus!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bathroom\n\Kitchen\n\Wardrobe\n\Bedroom");
    
    function processInput(input){
        if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        }else if (input.toLowerCase() === "wardrobe") {
            wardrobe();
        } else if (input.toLowerCase() === "bedroom") {
            bedroom2();
        } else {
            stayHere();
            waitThenCall(bedroom);
        }
    }
    waitForInput(processInput);
}

function bedroom2() {
    clear();
    bedroom2Discovered = true;
    print("\nYou have decided to get back in bed");
    print("\nYou fall back asleep and miss your bus.");
    print("\nType Start to try again");
    
    function processInput(input){
        if (input.toLowerCase() === "start") {
            start();
        } else {
            stayHere();
            waitThenCall(bedroom2);
        }
    }
    waitForInput(processInput);
}
function bathroom() {
    clear();
    bathroomDiscovered = true;
    if(kitchenDiscovered){
    print("\nYou are in bathroom!");
    print("\nGreat job brushing your teeth after eating breakfast");
    } else {
    print("\nInteresting choice brushing your teeth before you eat breakfast");}
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bedroom\n\Wardrobe\n\Bedroom2");
    
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
function kitchen() {
    clear();
    kitchenDiscovered = true;
    print("\nYou are in kitchen!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bedroom\n\Bathroom\n\Wardrobe");
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            bedroom();
        } else if (input.toLowerCase() === "bathroom") {
            bathroom();
        }else if (input.toLowerCase() === "wardrobe") {
            wardrobe();
        } else {
            stayHere();
            waitThenCall(bedroom);
        }
    }
    waitForInput(processInput);
}

function wardrobe() {
    clear();
    wardrobeDiscovered = true;
    print("\nYou are in your wardrobe!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bedroom\n\Kitchen\n\Bathroom\n\Bedroom");
    
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
    clear();
    print("\nWelcome to Dont Miss The Bus!");
    print("\nYou just woke up,");
    print("\nTo get out of bed, type Start");

function processInput(input){
if (input.toLowerCase() === "start") {
bedroom();
} else {
print("\noops. Im confused. Make sure you are typing the exact word that is written");
print("\nTo get out of bed, type Start");
}
}

waitForInput(processInput);
}

