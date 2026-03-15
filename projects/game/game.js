let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
//Declare your other global variables here
let bedroomDiscovered = true;
let bathroomDiscovered = false;
let kitchenDiscovered = false;
let wardrobeDiscovered = false;
let deskDiscovered = false;
let bedroom2Discovered = false;
let pantsDiscovered = false;
let shortsDiscovered = false;
let formalDiscovered = false;
let oldDiscovered = false;

//If you need, add any "helper" functions here


//Make one function for each location
function bedroom() {
    clear();
    bedroomDiscovered = true;
    print("\nYou are out of bed. You have to complete all the tasks to get on the bus and go to school.");
    print("\nIn this game, your morning routine steps matter! if you make the wrong choices you will miss the bus!!");
    print("\nWhere do you want to start? Say one of these choices:" +
        "\n\Bathroom\n\Kitchen\n\Wardrobe\n\Bedroom\n\Desk\n\Catch the bus");
    
    function processInput(input){
        if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        }else if (input.toLowerCase() === "wardrobe") {
            wardrobe();
        } else if (input.toLowerCase() === "bedroom") {
            bedroom2();
	} else if (input.toLowerCase() === "desk") {
		desk();
	} else if (input.toLowerCase() === "catch the bus"){
		catchTheBus();
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
        "\n\Bedroom\n\Wardrobe\n\Kitchen\n\Desk\n\Catch the bus");
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            bedroom2();
	} else if (input.toLowerCase() === "wardrobe"){
		wardrobe();
	} else if (input.toLowerCase() === "kitchen"){
		kitchen();
	} else if (input.toLowerCase () === "desk"){
		desk();
	} else if (input.toLowerCase() === "catch the bus"){
		catchTheBus();
	} else {
            stayHere();
            waitThenCall(bathroom);
        }
    }
    waitForInput(processInput);
}
function desk() {
    clear();
    deskDiscovered = true;
    print("\nYou shuffle over to your desk and pack all the things you need for school.");
    print("\nThis is an important step in your morning routine");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bathroom\n\Kitchen\n\Wardrobe\n\Bedroom\n\Catch the bus");
    
    function processInput(input){
        if (input.toLowerCase() === "bathroom") {
            bathroom();
        } else if (input.toLowerCase() === "kitchen") {
            kitchen();
        }else if (input.toLowerCase() === "wardrobe") {
            wardrobe();
        } else if (input.toLowerCase() === "bedroom") {
            bedroom2();
	} else if (input.toLowerCase() === "catch the bus"){
		catchTheBus();
        } else {
            stayHere();
            waitThenCall(desk);
        }
    }
    waitForInput(processInput);
}
function kitchen() {
    clear();
    kitchenDiscovered = true;
    print("\nYou are in kitchen!");
	if(formalDiscovered || pantsDiscovered){
		print("\n\oh no! you accidentlly spill syrup onto your entire outfit!");
		print("\n\When cleaning it off in the bathroom you take too long and miss the bus");
		print("\n\Type Start to try again");

 function processInput(input){
        if (input.toLowerCase() === "start") {
            start();
        } else {
            stayHere();
            waitThenCall(kitchen);
        }
    }
	} else {
		print("\n\You have a filling breakfast of pancakes and syrup");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\Bedroom\n\Bathroom\n\Wardrobe\n\Desk\n\Catch the bus"); }
    
    function processInput(input){
        if (input.toLowerCase() === "bedroom") {
            bedroom2();
        } else if (input.toLowerCase() === "bathroom") {
            bathroom();
        }else if (input.toLowerCase() === "wardrobe") {
            wardrobe();
	} else if (input.toLowerCase() === "desk") {
		desk();
	} else if (input.toLowerCase() === "catch the bus") {
		catchTheBus();
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
    print("\nType the expression that corresponds to the outfit you want to wear");
    print("\nExample Input: c1");
    print("\n\c1.Short sleeve shirt and shorts\n\c2.Long sleeve shirt and pants\n\c3.Formal shirt and pants\n\c4.Old shirt and pants");
    
    function processInput(input){
        if (input.toLowerCase() === "c1") {
            shorts();
        } else if (input.toLowerCase() === "c2") {
            pants();
        } else if (input.toLowerCase() === "c3") {
            formal();
        } else if (input.toLowerCase() === "c4") {
            old();
        } else {
            stayHere();
            waitThenCall(wardrobe);
        }
    }
    waitForInput(processInput);
}
function shorts() {
clear();
shortsDiscovered = true;
print("You haven't checked the weather but you you see the sun beaming brightly outside");
print("You put on your shorts and your short sleeved shirt");
print("What would you like to do next?:" + 
"\n\Bedroom\n\Bathroom\n\Kitchen\n\Desk\n\Catch the bus");

function processInput(input){
if (input.toLowerCase() === "bedroom"){
bedroom2();
} else if (input.toLowerCase() === "bathroom"){
bathroom();
} else if (input.toLowerCase() === "kitchen"){
kitchen();
} else if (input.toLowerCase() === "desk"){
	desk();
} else if (input.toLowerCase() === "catch the bus"){
	catchTheBus();
} else {
stayHere();
waitThenCall(shorts);
}
}
waitForInput(processInput);
}

function pants() {
clear();
pantsDiscovered = true
print("You notice you haven't worn your favorite pants in a while");
print("You put on your favorite pants and your long sleeved shirt");
print("What would you like to do next?:" + 
"\n\Bedroom\n\Bathroom\n\Kitchen\n\Desk\n\Catch the bus");

function processInput(input){
if (input.toLowerCase() === "bedroom"){
bedroom2();
} else if (input.toLowerCase() === "bathroom"){
bathroom();
} else if (input.toLowerCase() === "kitchen"){
kitchen();
} else if (input.toLowerCase() === "desk"){
	desk();
	} else if (input.toLowerCase() === "catch the bus"){
	catchTheBus();
} else {
stayHere();
waitThenCall(pants);
}
}
waitForInput(processInput);
}

function formal() {
clear();
formalDiscovered = true;
print("You can really decide what to wear so you bring out the formal wear.");
print("what could go wrong?")
print("You put on your fancy top and shiny shoes");
print("What would you like to do next?:" + 
"\n\Bedroom\n\Bathroom\n\Kitchen\n\Desk\n\Catch the bus");

function processInput(input){
if (input.toLowerCase() === "bedroom"){
bedroom2();
} else if (input.toLowerCase() === "bathroom"){
bathroom();
} else if (input.toLowerCase() === "kitchen"){
kitchen();
}else if (input.toLowerCase() === "desk"){
	desk();
} else if (input.toLowerCase() === "catch the bus"){
	catchTheBus();
} else {
stayHere();
waitThenCall(formal);
}
}
waitForInput(processInput);
}

function old() {
clear();
oldDiscovered = true;
print("You're so tired that you don't really care what you wear");
print("You put on your old shirt and shoes and call it a day");
print("What would you like to do next?:" + 
"\n\Bedroom\n\Bathroom\n\Kitchen\n\Desk\n\Catch the bus");

function processInput(input){
if (input.toLowerCase() === "bedroom"){
bedroom2();
} else if (input.toLowerCase() === "bathroom"){
bathroom();
} else if (input.toLowerCase() === "kitchen"){
kitchen();
} else if (input.toLowerCase() === "desk"){
	desk();
} else if (input.toLowerCase() === "catch the bus"){
	catchTheBus();
} else {
stayHere();
waitThenCall(old);
}
}
waitForInput(processInput);
}

function catchTheBus(){
	clear();
	if (wardrobeDiscovered && bathroomDiscovered && kitchenDiscovered && deskDiscovered){
		print("\n\You have successfully completed your morning routine!")
		print("\n\You cought the bus and got to school");
		print("\n\Congradulations on finishing the game!");
	} else {
		print("\n\Uh oh! The bus driver did not let you on without completing your morning routine");
		print("\n\Type Start to try again");

		function processInput(input){
        if (input.toLowerCase() === "start") {
             bedroom();
        } else {
            stayHere();
            waitThenCall(catchTheBus);
        }
    }

}
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA

function start(){
	print("Welcome to Don't Miss the Bus");
	print("type start to begin");

	function processInput(input){
		bedroom();
	}
	waitForInput(processInput);
}
