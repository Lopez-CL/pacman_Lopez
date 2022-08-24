var world = [
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
[2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 2, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 2, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];

function renderWorld(){
    var worldBlocks = '';
    for (i = 0; i < world.length; i++){
        worldBlocks += '\n<div class="row">\n';
        for (var j = 0; j < world.length; j++)
            if (world[i][j] == 2){
                worldBlocks += '<div class="brick"></div>'; //pick up at 23"39//
            }
            else if (world[i][j] == 1){
                worldBlocks += '<div class="coin"></div>';
            }
            if (world[i][j] == 0){
                worldBlocks += '<div class="empty"></div>';
            }
        worldBlocks += '\n</div>';
        console.log( worldBlocks);
    }
    document.getElementById("world").innerHTML = worldBlocks;
}
//renders Pacmac World//
renderWorld();