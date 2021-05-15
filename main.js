var canvas = new fabric.Canvas('myCanvas');

block_image_width=30;

block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png" ,function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140); 
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image ,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height); 
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypresed=e.keyCode;
    console.log(keypresed);
    if (e.shiftKey==true && keypresed=='80') {
        console.log("p and shift pressed together ");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && keypresed=='77') {
        console.log("m and shift pressed together ");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (keypresed=='38') {
    up();
    console.log("up");
    }
    if (keypresed=='40') {
        down();
        console.log("down");
        }
        if (keypresed=='37') {
            left();
            console.log("left");
            }
        if (keypresed=='39') {
                right();
                console.log("right");
                }
        if (keypresed=='87') {
                    new_image('1495586612ironman-head-face-clipart-png')
                    console.log("w");
                    }    
if (keypresed=='71') {
new_image('th (2).jpg')
 console.log("g");
}     
  if (keypresed=='76') {
    new_image('th (3).jpg')
     console.log("l");
      }
      if (keypresed=='84') {
        new_image('th (4).jpg')
         console.log("t");
          } 
          if (keypresed=='82') {
            new_image('maxresdefault.jpg')
             console.log("r");
              }   
              if (keypresed=='89') {
                new_image('th (5).jpg')
                 console.log("y");
                  }    
            
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when up arrow key is pressed, x= "+ player_x + " , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed, x= "+ player_x + " , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x> 0){
        player_x=player_x-block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left arrow key is pressed, x= "+ player_x + " , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<= 850){
        player_x=player_x+block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow key is pressed, x= "+ player_x + " , y= "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}