Status = "";
fruit = "";
object = [];

function preload()
{
    fruit = loadImage("f.jpg");
}

function setup()
{
    canvas = createCanvas(640, 350);
    canvas.position(400, 265);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(fruit, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    if (Status != undefined) {
          image(fruit, 0, 0, 640, 350);
      for (var i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
  
        fill(255, 0, 0);
        percent = floor(object[i].confidence * 100);
        text(object[i].label + " " + percent + "%", object[i].x + 5, object[i].y + 15);
        noFill();
        stroke(255, 0, 0);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }
    }
  }