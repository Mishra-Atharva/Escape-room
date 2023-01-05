//player image and coordinates
var player = new Image();
player.src = "player.png";
var size = 80;
var moving = true;
var touch = false;
var num = 0;

//coordinates
var playerPX = 250;
var playerPY = 350;

//image dimensions
var playerW = 32;
var playerH = 32;

//player animation
var playerState = [{
    name: "idle",
    frame: 2,
    frameY: 0,
}, {
    name: "walk",
    frame: 7,
    frameY: 3,
}];

//animation frame
var playerFX = 0;
var playerFY = playerState[0].frameY;
var playerFrame = playerState[0].frame;

//canvas 
var playerBX = playerFX;
var playerBY = playerFY * playerH;

function idle(e) {

    if (e.code == "KeyD") {
        playerFrame = playerState[0].frame;
        playerFY = playerState[0].frameY;
        playerBY = playerFY * playerH;
        right = false;

    } 
    
    if (e.code == "KeyA") {
        playerFrame = playerState[0].frame;
        playerFY = playerState[0].frameY;
        playerBY = playerFY * playerH;
        left = false;

    } 
    
    if (e.code == "KeyW") {
        playerFrame = playerState[0].frame;
        playerFY = playerState[0].frameY;
        playerBY = playerFY * playerH;
        up = false;

    } 
    
    if (e.code == "KeyS") {
        playerFrame = playerState[0].frame;
        playerFY = playerState[0].frameY;
        playerBY = playerFY * playerH;
        down = false;
    }

    if (e.code == "KeyE") {
        epressed = false;
    }
}


function movement(e){

    if (e.code == "KeyD") {
        playerFrame = playerState[1].frame;
        playerFY = playerState[1].frameY;
        playerBY = playerFY * playerH;
        right = true;

    } 
    
    if (e.code == "KeyA") {
        playerFrame = playerState[1].frame;
        playerFY = playerState[1].frameY;
        playerBY = playerFY * playerH;
        size = -80;
        left = true;

    } 
    
    if (e.code == "KeyW") {
        playerFrame = playerState[1].frame;
        playerFY = playerState[1].frameY;
        playerBY = playerFY * playerH;
        up = true;
    } 
    
    if (e.code == "KeyS") {
        playerFrame = playerState[1].frame;
        playerFY = playerState[1].frameY;
        playerBY = playerFY * playerH;
        down = true;
    }

    if (e.code == "KeyE") {
        epressed = true;
    }
}

function playermovement() {
    if (right) {

        //collision
        for (var i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if(collided(playerPX, playerPY, {...boundary, position: {
                x: boundary.position.x - 5,
                y: boundary.position.y
            }})) {
                moving = false;
                break;
            };
        }
        
        if (right && moving) {
            speed = 5;
            playerPX += 2.3;
        }

    } 
    
    if (left){

        //collision
        for (var i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if(collided(playerPX, playerPY, {...boundary, position: {
                x: boundary.position.x + 5,
                y: boundary.position.y
            }})) {
                moving = false;
                break;
            };
        }

        if (left && moving) {
            speed = 5;
            playerPX -= 2.3;

        }
    }

    if (up) {

        //collision
        for (var i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if(collided(playerPX, playerPY, {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y + 5
            }})) {
                moving = false;
                break;
            };
        }

        if (up && moving) {


            if (mapPY <= mapRY) {

                speed = 5;
                playerPY -= 0.8;
                mapPY += 2.3;
                interaction.forEach(item => {
                    item.position.y += 2.3;
                });
                boundaries.forEach(place => {
                    place.position.y += 2.3;
                });
                escapedoor[0].position.y += 2.3;

            } else {

                mapPX = 0;
                speed = 5;
                playerPY -= 2.3;

            }
        }

    } 
    
    if (down) {

        //collision
        for (var i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i];
            if(collided(playerPX, playerPY, {...boundary, position: {
                x: boundary.position.x,
                y: boundary.position.y - 5
            }})) {
                moving = false;
                break;
            };
        }

        if (down && moving) {
            if (mapPY >= mapMY) {
                speed = 5;
                playerPY += 0.8;
                mapPY -= 2.3;
                interaction.forEach(item => {
                    item.position.y -= 2.3;
                });
                boundaries.forEach(place => {
                    place.position.y -= 2.3;
                });
                escapedoor[0].position.y -= 2.3;

            } else {

                speed = 5;
                playerPY += 2.3;

            }
        }
    }
}