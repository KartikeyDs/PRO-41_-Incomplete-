const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var u_;
var walk_, walk_anim

function preload(){
walk_anim = loadAnimation("walking_1.png, walking_2.png, walking_3.png, walking_4.png, walking_5.png, walking_6.png, walking_7.png, walking_8.png")
}

function setup(){
createCanvas(500,889)

engine = Engine.create();
world = engine.world;

u_ = new umbrella(250,400,10);
walk_.createSprite(250,700,50,50);
walk_.addAnimation(walk_anim);
    
}

function draw(){
background("black");

Engine.update(engine);

u_.display();
drawSprites();

}   

