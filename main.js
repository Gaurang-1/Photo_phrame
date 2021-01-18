function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,400);
    video.hide();
}

function draw(){
    image(video,90,100,400,300);
    
    fill(165,42,42)
    rect(0, 30, 55, 55, 20);

    fill(101,67,33)
    rect(55, 35, 450, 45, );

    fill(165,42,42)
    rect(505, 30, 55, 55, 20);

    fill(101,67,33)
    rect(55, 420, 450, 45, );

    fill(165,42,42)
    rect(505, 415, 55, 55, 20);

    fill(165,42,42)
    rect(0, 415, 55, 55, 20);

    fill(101,67,33)
    rect(5, 80, 45, 340, );

    fill(101,67,33)
    rect(510, 80, 45, 340, );
}

function take_snapshot(){
    save('MyDigitalPhoto.png');
}