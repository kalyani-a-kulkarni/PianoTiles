var backgroundImg;
var tile1, tile1Img, tile1Group;
var startTile, startTileImg;
var icon, iconImg;

var play, playImg;
var pause, pauseImg;

var sound1, sound2, sound3, sound4, sound5;

var gameState = "START";
var score = 0;

function preload()
{
    backgroundImg = loadImage("images/background.jpg");
    tileImg = loadImage("images/tile.jpg");
    startTileImg = loadImage("images/startTile.jpg");
    iconImg = loadImage("images/icon.png");

    playImg = loadImage("images/play.png");
    pauseImg = loadImage("images/pause.png");

    sound1 = loadSound("sound/sound1.mp3");
    sound2 = loadSound("sound/sound2.mp3");
    sound3 = loadSound("sound/sound3.mp3");
    sound4 = loadSound("sound/sound4.mp3");
    sound5 = loadSound("sound/sound5.mp3");
}

function setup() 
{
    createCanvas(425, 600);

    startTile = createSprite(215.5, 450, 10, 10);
    startTile.addImage(startTileImg);
    startTile.scale = 0.75;

    icon = createSprite(215.5, 150, 10, 10);
    icon.addImage(iconImg);
    icon.scale = 0.5;

    play = createSprite(215.5, 400, 10, 10);
    play.addImage(playImg);
    play.scale = 0.15;
    play.visible = false;

    pause = createSprite(395, 35, 10, 10);
    pause.addImage(pauseImg);
    pause.scale = 0.05;
    pause.visible = false;

    tile1Group = new Group();

}
  
  function draw() 
{
    background(backgroundImg);

    if(gameState === "START" && mousePressedOver(startTile))
    {
            startTile.destroy();
            icon.destroy();
            gameState = "PLAY";
            sound1.play();
    }

    if(gameState === "PLAY")
    {
        pause.visible = true;

        spawnTile();
        
        if(mousePressedOver(tile1Group.get(0)))
        {
            tile1Group.get(0).destroy();
            sound1.play();
            score=score+1;
        }           
        
        fill(255);
        textSize(30);
        text("Score: " + score, 170, 50);

        // if(tile1.y>600)
        // {
        //     console.log("LOST");
        // }
        
    }
    

    

    drawSprites();
}

function spawnTile()
{
    if(frameCount % 75 === 0)
    {
        tile1 = createSprite(212.5, -50, 10, 10);
        tile1.addImage(tileImg);
        tile1.velocityY = 5;
        tile1.scale = 0.5;
        tile1.x = Math.round(random(75, 350));
        
        console.log(tile1.y);

        tile1Group.add(tile1);
    }
}