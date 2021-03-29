canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_image="car1.png"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="car2.png"
car2_x=10;
car2_y=10;

function add(){
    background_imgTag = new Image();
    background_imgTag.onload= uploadbackground;
    background_imgTag.src=background_image;

}

function uploadbackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}


function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
    }

    funtion car1_up()
    {
        if(car1_y>=10)
        {
            car1_y= +500
            console.log("When up arrow key is pressed, x =" + car1_x +" | y = " + car1_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
   
    funtion car1_down()
    {
        if(car1_y<=0)
        {
            car1_y= -500
            console.log("When down arrow key is pressed, x =" + car1_x +" | y = " + car1_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
   
   
   
    funtion car1_left()
    {
        if(car1_x>=0)
        {
            car1_x= -10
            console.log("When left arrow key is pressed, x =" + car1_x +" | y = " + car1_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }


    funtion car1_right()
    {
        if(car1_y<=500)
        {
            car1_y= +10
            console.log("When right arrow key is pressed, x =" + car1_x +" | y = " + car1_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }














    funtion car2_up()
    {
        if(car2_y>=10)
        {
            car2_y= +500
            console.log("When up arrow key is pressed, x =" + car2_x +" | y = " + car2_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
   
    funtion car2_down()
    {
        if(car2_y<=0)
        {
            car2_y= -500
            console.log("When down arrow key is pressed, x =" + car2_x +" | y = " + car2_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }
   
   
   
    funtion car2_left()
    {
        if(car2_x>=0)
        {
            car1_2= -10
            console.log("When left arrow key is pressed, x =" + car2_x +" | y = " + car2_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }


    funtion car2_right()
    {
        if(car2_y<=500)
        {
            car2_y= +10
            console.log("When right arrow key is pressed, x =" + car2_x +" | y = " + car2_y)
            uploadBackground();
            uploadcar1();
            uploadcar2();
        }
    }








    if(ca1_x>700)
    {
        console.log("car1 Won");
        document.getElementById('game_status').innerHTML = "Car 1 Won!"
    }