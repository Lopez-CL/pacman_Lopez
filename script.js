var world = [
    [2,2,2,2,2,2,2,2,2,2], 
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

function renderWorld(){
    var worldBlocks = '';
    for (i = 0; i < world.length; i++){
        worldBlocks += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2)
                worldBlocks += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                worldBlocks += "<div class='coin'></div>";
            if(world[i][j] == 0)
                worldBlocks += "<div class='empty'></div>";
        }
        worldBlocks += "</div>";
        console.log( worldBlocks);
    }
    document.getElementById("world").innerHTML = worldBlocks;
}
//renders Pacmac World//
renderWorld();

//render pacman//
var pacman = {
    y: 20,
    x: 20
}
function renderPacman(){
    document.getElementById("pacman").style.left = pacman.x + "px";
    document.getElementById("pacman").style.top = pacman.y + "px";
}
renderPacman();

//moves player//
var top = 40;
var left = 20;

document.onkeydown = function(e){
    if (e.keyCode == 37){
        pacman.x -= 20;
    }
    if (e.keyCode == 39){
        pacman.x += 20;
    }
    renderPacman();
    console.log(e);
}