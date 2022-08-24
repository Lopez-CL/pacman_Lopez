var world =[
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
[2, 1, , 1, 1, 1, 1, 1, 1, 2],
[2, 1, , 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
[2, 2, 2, 2, 2, 2, 2, 2, 2, 2]]

function renderWorld(){
    var worldBlocks = '';
    for (i = 0; i < world.length; i++){
        worldBlocks += '<div class="row">';
        for (var j = 0; j < world.length; j++)
            if (world[i][j] == 2){
                worldBlocks += '\n\t<div class="brick"></div>'; //pick up at 23"39//
            }
            else if (world[i][j] == 1){
                worldBlocks += '<div class="coin"></div>';
            }
            if (world[i][j] == 0){
                worldBlocks += '<div class="empty"></div>';
            }
        worldBlocks += '</div>';
    }
    return worldBlocks;
}

console.log(renderWorld());