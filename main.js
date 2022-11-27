var img;
var nose_x;
var nose_y;
function preload(){
    img = loadImage("https://i.postimg.cc/2yv5g6dr/clown-nose.png");
}
function setup(){
    canvas =  createCanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);


    
}
function modelLoaded(){

    console.log("Pose net model is loaded.")

}


function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x cordinate: " + results[0].pose.nose.x);
        console.log("Nose y cordinate: " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 18;
        nose_y = results[0].pose.nose.y - 15;

    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(img, nose_x, nose_y , 40, 40);   
}

function take_snapshot(){
    save("myFilterImg.png")
}