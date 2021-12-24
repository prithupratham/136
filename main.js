video = "";
status = ""; 
function preload(){
    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(460,360);
    canvas.center();
}

function draw(){
    image(video,0,0,460,360);
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("model loaded!");
     status = true;
     video.speed(1);
     video.volume(0);
     video.loop();
}