# Don't Miss The Bus!

## Setting

This game takes place within different areas in the player's house.

## Map

```mermaid
graph TD;
    bedroom-->wardrobe;
    wardrobe-->kitchen;
    kitchen-->bathroom;
    bathroom-->desk;
    desk-->catch the bus;
```

It is a school morning. The character wakes up out of bed and has to complete their daily morning routine in order to get on the bus and go to school.

## Story

If the player doesn't catch the school bus, there is no way for them to get to school. Before they get on the bus though, the have to complete their morning routine. Order of completion plays a huge role in this game. If the player doeas all the tasks in the correct order, they will be able to catch the bus. If they don't, they might have consequences and need to start the game over again. 

When they first get up, they will have an option to get back in bed. This is a bad option as it causes them to oversleep and miss the bus. The best choices to start would be to go to the desk, wardobe, or kitchen. The wardrobe could be risky because some outfits will be problamatic in the future. If you choose the right outfits though, you will be safe. The kitchen could be a good option because you won't have any problems if you go there before the wardrobe. You are also praised when you reach the bathroom for eating before brushing your teeth. The order in witch you go to your desk will not have an impact on any other locations but if you don't go to your desk, you will not be able to catch the bus. 


## Global Variables

My global variables determine weather or not the player has visited that location yet. They are all booleen expressions that start off set to false until the player gets to them in the game. The order in which the player gets to certain locations matters as it can change how their morning goes or can even cause them to lose the game.If the player visits the locations in an acceptable order, then they will be able to catch the bus.
