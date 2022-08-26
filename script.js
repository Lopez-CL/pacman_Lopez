var world = [
    [2,2,2,2,2,2,2,2,2,2], 
    [2,0,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];
var score = document.getElementById("score");
var num = 0;
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
        // console.log( worldBlocks);//
    }
    document.getElementById("world").innerHTML = worldBlocks;
}
//renders Pacmac World//
renderWorld();

//render pacman//
var pacman = {
    y: 1,
    x: 1
}
function renderPacman(){
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
}
//score board//
renderPacman();
//moves pacman//
document.onkeydown = function(e){
    if (e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2 ){ //left//
        pacman.x --;
    }
    else if (e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2){//right//
        pacman.x ++;
    }
    else if (e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2){//up//
        pacman.y --;
    }
    else if (e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2){//down//
        pacman.y ++;
    }
    if (world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        num = num + 5;
        score.innerHTML = "Score: " + num;
    }
    if (num == 270){
        location.reload();
    }
    renderWorld();
    renderPacman();
}