song_1="";
song_2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;

function preload(){
song=loadSound("Bezubaan.mp3");
song=loadSound("Saathiya.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
    
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet model has been loaded");
}

function draw(){
image(video,0,0,600,500);
fill("#00aee3");
stroke("#000000");
circle(rightWristX,rightWristY,36);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        score_lw=results[0].pose.keypoints[9].score;
        console.log("Score Left Wrist = "+score_lw);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist X= "+leftWristX+" Left wrist Y= "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist X= "+rightWristX+" Right wrist Y= "+rightWristY);
    }
}