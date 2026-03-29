let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for(let y = 0; y <= 200; y += 100){
    for(let x = 25; x <= 725; x += 100){
	ctx.fillRect(x,y,50,25);
}
}
canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for(let y = 100; y < 800; y += 100){
        for(let x = 25; x < y; x += 100){
	        ctx.fillRect(x,y,50,25);
        }
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here
        for(let x = 100; x < 800; x += 100){
	        for(let y = 20; y < x; y += 100){
		        ctx.fillRect(x,y,50,25);
	        }
        }
  for(let y = 100; y < 800; y += 100){
	        for(let x = 20; x < y; x += 100){
		        ctx.fillRect(x,y,50,25);
	        }
        }

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here
for(let x = 100










