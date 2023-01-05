//map images and coordiantes
var map = new Image();
var foreground = new Image();
foreground.src = "map/foreground.png";
map.src = "map/map.png";

//map coordinates
var mapPX = 0;
var mapPY = 0;
var mapRX = 0;
var mapRY = 0;
var mapMX = -83;
var mapMY = -817;
var code = "";

collisionMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 769) {
            boundaries.push(new Boundary({
                position: {
                    x: j * Boundary.width + mapPX,
                    y: i * Boundary.height + mapPY
                }
            }));
        }
    });
});

interactMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol == 770) {
            interaction.push(new obj({
                position: {
                    x: j * obj.width + mapPX,
                    y: i * obj.height + mapPY
                }
            }));
        } else if (symbol == 771) {
            escapedoor.push(new Boundary({
                position: {
                    x: j * Boundary.width + mapPX,
                    y: i * Boundary.height + mapPY
                }
            }));
        }
    });
});

for (var i = 0; i < interaction.length; i++){
    code += interaction[i].code;
}