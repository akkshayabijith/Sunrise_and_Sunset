const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sunrise1.png";
var final;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);    
    }else{
        background(247, 128, 15);
    }
    // add condition to check if any background image is there to add

    ;
    Engine.update(engine);

    // write code to display time in correct format here
        time();    
    text("Time: " + final,width-1300,100);
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var fetchhe = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var json = await fetchhe.json();
    var getDatetime = json.datetime;

    // write code slice the datetime
    var getHour = getDatetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset

    if(getHour >= 01 && getHour < 03){
       bg = "sunrise1.png"
    }else if(getHour >= 03 && getHour < 05){
        bg = "sunrise2.png"
    }else if(getHour >= 05 && getHour < 07){
        bg = "sunrise3.png"
    }else if(getHour >=  07&& getHour <09 ){
        bg = "sunrise4.png"
    }else if(getHour >=  09&& getHour < 11){
        bg = "sunrise5.png"
    }else if(getHour >= 11 && getHour < 13){
        bg = "sunrise6.png"
    }else if(getHour >= 13 && getHour < 15){
        bg = "sunset7.png"
    }else if(getHour >=  15 && getHour < 17){
        bg = "sunset8.png"
    }else if(getHour >= 17 && getHour < 19){
        bg = "sunset9.png"
    }else if(getHour >=  19&& getHour <21 ){
        bg = "sunset10.png"
    }else if(getHour >=  21&& getHour < 23){
        bg = "sunset11.png"
    }else if(getHour >=  23&& getHour < 24){
        bg = "sunset12.png"
    }
     

    //load the image in backgroundImg variable here
     backgroundImg = loadImage(bg);
}

async function time(){

var put = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var getJson = await put.json();
var getDatetime = getJson.datetime;    
 final = getDatetime.slice(11,16);
}
