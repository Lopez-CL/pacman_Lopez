var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2], 
    [2,0,1,3,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,1,1,1,1,1,1,1,1,1,2],
    [2,1,3,2,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,1,1,2,1,1,1,1,1,2],
    [2,1,1,1,1,1,3,2,2,2,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2,1,3,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];
var score = document.getElementById("score");
var num = 0;
function renderWorld(){
    var worldBlocks = '';
    var coins = 0;
    for (i = 0; i < world.length; i++){
        worldBlocks += "<div class='row'>";
        for (var j = 0; j < world[i].length; j++){
            if(world[i][j] == 2){
                worldBlocks += "<div class='brick'></div>";
            }
            if(world[i][j] == 1){
                worldBlocks += "<div class='coin'></div>";
                coins = ++coins;
            }
            if(world[i][j] == 3){
                worldBlocks += "<div class='cherry'></div>";
                coins = ++coins;
            }
            if(world[i][j] == 0){
                worldBlocks += "<div class='empty'></div>";
            }
        }
        worldBlocks += "</div>";
    }
    console.log(coins);
    if (coins == 0){
        alert("You won! can you do it again?");
        location.reload();
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
        num = num + 10;
        score.innerHTML = "Score: " + num;
    }
    if (world[pacman.y][pacman.x] == 3){
        world[pacman.y][pacman.x] = 0;
        num = num + 50;
        score.innerHTML = "Score: " + num;
    }
    renderWorld();
    renderPacman();
}

function gameReset(){
    if (num == maxCherry){
        location.reload();
    }
}
