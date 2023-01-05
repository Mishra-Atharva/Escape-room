//screen initalization
var screen = document.getElementById("screen");
var ctx = screen.getContext("2d");
screen.width = document.body.offsetWidth;
screen.height = document.body.offsetHeight;
var text = new Image();
text.src = "map/text.png";
var text1 = new Image();
text1.src = "map/nothing.png"
var num = 0;
var one = new Image();
var two = new Image();
var three = new Image();
var four = new Image();
var five = new Image();
var six = new Image();
var seven = new Image();
var eight = new Image();
var nine = new Image();
var pass = "";
var exit = false;
one.src = "map/1.png";
two.src = "map/2.png";
three.src = "map/3.png";
four.src = "map/4.png";
five.src = "map/5.png";
six.src = "map/6.png";
seven.src = "map/7.png";
eight.src = "map/8.png";
nine.src = "map/9.png";


//frames
var speed = 5;
var fps = 0;

//movements handler
var up = false;
var down = false;
var left = false;
var right = false;
var epressed = false;

//listener
document.addEventListener("keydown", movement);
document.addEventListener("keyup", idle);

//draws the game
function draw() {
    touch = false;
    moving = true;
    exit = false;

    //clearing the canvas
    ctx.clearRect(0,0, screen.width, screen.height);

    //movement
    playermovement();

    //fps
    let position = Math.floor(fps/speed) % playerFrame;
    playerBX = playerW * position;

    //drawing the map 
    ctx.drawImage(map, mapPX, mapPY);

    //drawing the player
    ctx.drawImage(player, playerBX, playerBY, playerW, playerH, playerPX, playerPY, 80, 80);

    //drawing the foreground
    ctx.drawImage(foreground, mapPX, mapPY);

    //collide  
    for (var i = 0; i < interaction.length; i++) {  

        const interacts = interaction[i];
        num = i;
        
        if(playerPX + playerW >= interacts.position.x && playerPX  <= interacts.position.x + Boundary.width &&  playerPY <= interacts.position.y + Boundary.height && playerPY + playerH >= interacts.position.y) {
            ctx.drawImage(text, 700, 800);
            touch = true;
            break;
        }
    }

    if (touch && epressed) {
        interaction[num].show = true;
    }

    for(var o = 0; o < interaction.length; o++) {
        if (interaction[o].show) {
            if (interaction[o].code == 1) {
                ctx.drawImage(one, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 2) {
                ctx.drawImage(two, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 3) {
                ctx.drawImage(three, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 4) {
                ctx.drawImage(four, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 5) {
                ctx.drawImage(five, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 6) {
                ctx.drawImage(six, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 7) {
                ctx.drawImage(seven, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 8) {
                ctx.drawImage(eight, interaction[o].position.x + 30, interaction[o].position.y);
            } else if (interaction[o].code == 9) {
                ctx.drawImage(nine, interaction[o].position.x + 30, interaction[o].position.y);
            }
        }
    }

    if(playerPX + playerW >= escapedoor[0].position.x && playerPX  <= escapedoor[0].position.x + Boundary.width &&  playerPY <= escapedoor[0].position.y + Boundary.height && playerPY + playerH >= escapedoor[0].position.y) {
        ctx.drawImage(text, 700, 800);
        exit = true;
    }
    
    checking();    
    fps++;
    requestAnimationFrame(draw);
}

draw();