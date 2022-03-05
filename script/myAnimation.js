let canvas = document.getElementById('my_canvas');
let ctx = canvas.getContext('2d');

canvas.width = innerWidth;
let cW = canvas.width;
let cH = canvas.height;

class Data {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    clickData(xmouse, ymouse){
        //d = sqrt((a - x)^2 + (b - y)^2)
        const distance =Math.sqrt(((xmouse-this.x)*(xmouse-this.x))
            +((ymouse-this.y)*(ymouse-this.y)));
        if(this.radius >= distance){
            return true;
        }else {
            return false;
        }
    }
    update(){
        this.draw();
        this.x = this.x + this.velocity.x;
    }
}

function whrite (msg,myfont, color, alignText, dx, dy){
    ctx.font = myfont;
    ctx.fillStyle = color;
    ctx.textAlign = alignText;
    ctx.fillText(msg, dx, dy);
}

let data1_2013 = new Data(cW/5,100, 50,'#E6007E', {x:0});
let data2_2013 = new Data(cW/5,100, 23.65,'#312783', {x:0});
let data3_2013 = new Data(cW/5,100, 25,'#70B62B', {x:0});
let data4_2013 = new Data(cW/5,100, 0,'#E7302A', {x:0});
let data5_2013 = new Data(cW/5,100, 1.35,'#662483', {x:0});

let data1_2014 = new Data(cW/5,250, 50,'#E6007E', {x:0});
let data2_2014 = new Data(cW/5,250, 25,'#312783', {x:0});
let data3_2014 = new Data(cW/5,250, 23.75,'#70B62B', {x:0});
let data4_2014 = new Data(cW/5,250, 0,'#E7302A', {x:0});
let data5_2014 = new Data(cW/5,250, 1.25,'#662483', {x:0});

let data1_2015 = new Data(cW/5,400, 50,'#E6007E', {x:0});
let data2_2015 = new Data(cW/5,400, 22.5,'#312783', {x:0});
let data3_2015 = new Data(cW/5,400, 25,'#70B62B', {x:0});
let data4_2015 = new Data(cW/5,400, 0,'#E7302A', {x:0});
let data5_2015 = new Data(cW/5,400, 2.8,'#662483', {x:0});

let data1_2016 = new Data(cW/5,550, 50,'#E6007E', {x:0});
let data2_2016 = new Data(cW/5,550, 27.05,'#312783', {x:0});
let data3_2016 = new Data(cW/5,550, 21.2,'#70B62B', {x:0});
let data4_2016 = new Data(cW/5,550, 0,'#E7302A', {x:0});
let data5_2016 = new Data(cW/5,550, 1.75,'#662483', {x:0});

let data1_2017 = new Data(cW/5,700, 50,'#E6007E', {x:0});
let data2_2017 = new Data(cW/5,700, 21.6,'#312783', {x:0});
let data3_2017 = new Data(cW/5,700, 21.6,'#70B62B', {x:0});
let data4_2017 = new Data(cW/5,700, 4.95,'#E7302A', {x:0});
let data5_2017 = new Data(cW/5,700, 1.85,'#662483', {x:0});

let data1_2018 = new Data(cW/5,850, 50,'#E6007E', {x:0});
let data2_2018 = new Data(cW/5,850, 26.15,'#312783', {x:0});
let data3_2018 = new Data(cW/5,850, 20,'#70B62B', {x:0});
let data4_2018 = new Data(cW/5,850, 2.3,'#E7302A', {x:0});
let data5_2018 = new Data(cW/5,850, 1.55,'#662483', {x:0});

let data1_2019 = new Data(cW/5,1000, 50,'#E6007E', {x:0});
let data2_2019 = new Data(cW/5,1000, 26.2,'#312783', {x:0});
let data3_2019 = new Data(cW/5,1000, 18.9,'#70B62B', {x:0});
let data4_2019 = new Data(cW/5,1000, 1.2,'#E7302A', {x:0}); //1.2
let data5_2019 = new Data(cW/5,1000, 3.65,'#662483', {x:0});

let counter = 0;
let start = false;
let end = false;



//nach Recht gehen beim Klick
canvas.addEventListener('click', (event)=>{
       start = true;
       if (start && counter <= 1) {
           counter++;
       }
           if (start) {
               data5_2013.velocity.x = 15;
               data4_2013.velocity.x = 13;
               data3_2013.velocity.x = 11;
               data2_2013.velocity.x = 9;
               data1_2013.velocity.x = 7;

               data5_2014.velocity.x = 15;
               data4_2014.velocity.x = 13;
               data3_2014.velocity.x = 11;
               data2_2014.velocity.x = 9;
               data1_2014.velocity.x = 7;

               data5_2015.velocity.x = 15;
               data4_2015.velocity.x = 13;
               data3_2015.velocity.x = 11;
               data2_2015.velocity.x = 9;
               data1_2015.velocity.x = 7;

               data5_2016.velocity.x = 15;
               data4_2016.velocity.x = 13;
               data3_2016.velocity.x = 11;
               data2_2016.velocity.x = 9;
               data1_2016.velocity.x = 7;

               data5_2017.velocity.x = 15;
               data4_2017.velocity.x = 13;
               data3_2017.velocity.x = 11;
               data2_2017.velocity.x = 9;
               data1_2017.velocity.x = 7;

               data5_2018.velocity.x = 15;
               data4_2018.velocity.x = 13;
               data3_2018.velocity.x = 11;
               data2_2018.velocity.x = 9;
               data1_2018.velocity.x = 7;

               data5_2019.velocity.x = 15;
               data4_2019.velocity.x = 13;
               data3_2019.velocity.x = 11;
               data2_2019.velocity.x = 9;
               data1_2019.velocity.x = 7;
           }
})

function stop_2013(){
    if (data5_2013.x >= cW -100) {
        data5_2013.velocity.x = 0;
        data5_2013.x = cW - 100;
    }

    if (data4_2013.x >= cW - 200) {
        data4_2013.velocity.x = 0;
        data4_2013.x = cW - 200;
    }

    if (data3_2013.x >= cW - 400) {
        data3_2013.velocity.x = 0;
        data3_2013.x = cW - 400;
    }

    if (data2_2013.x >= cW - 600) {
        data2_2013.velocity.x = 0;
        data2_2013.x = cW - 600;
    }

    if (data1_2013.x >= cW - 800) {
        data1_2013.velocity.x = 0;
        data1_2013.x = cW - 800;
    }
}

function stop_2014(){
    if (data5_2014.x >= cW - 100) {
        data5_2014.velocity.x = 0;
        data5_2014.x = cW - 100;
    }

    if (data4_2014.x >= cW - 200) {
        data4_2014.velocity.x = 0;
        data4_2014.x = cW - 200;
    }

    if (data3_2014.x >= cW - 400) {
        data3_2014.velocity.x = 0;
        data3_2014.x = cW - 400;
    }

    if (data2_2014.x >= cW - 600) {
        data2_2014.velocity.x = 0;
        data2_2014.x = cW - 600;
    }

    if (data1_2014.x >= cW - 800) {
        data1_2014.velocity.x = 0;
        data1_2014.x = cW - 800;
    }
}

function stop_2015(){
    if (data5_2015.x >= cW - 100) {
        data5_2015.velocity.x = 0;
        data5_2015.x = cW - 100;
    }

    if (data4_2015.x >= cW - 200) {
        data4_2015.velocity.x = 0;
        data4_2015.x = cW - 200;
    }

    if (data3_2015.x >= cW - 400) {
        data3_2015.velocity.x = 0;
        data3_2015.x = cW - 400;
    }

    if (data2_2015.x >= cW - 600) {
        data2_2015.velocity.x = 0;
        data2_2015.x = cW - 600;
    }

    if (data1_2015.x >= cW - 800) {
        data1_2015.velocity.x = 0;
        data1_2015.x = cW - 800;
    }
}

function stop_2016(){
    if (data5_2016.x >= cW - 100) {
        data5_2016.velocity.x = 0;
        data5_2016.x = cW - 100;
    }

    if (data4_2016.x >= cW - 200) {
        data4_2016.velocity.x = 0;
        data4_2016.x = cW - 200;
    }

    if (data3_2016.x >= cW - 400) {
        data3_2016.velocity.x = 0;
        data3_2016.x = cW - 400;
    }

    if (data2_2016.x >= cW - 600) {
        data2_2016.velocity.x = 0;
        data2_2016.x = cW - 600;
    }

    if (data1_2016.x >= cW - 800) {
        data1_2016.velocity.x = 0;
        data1_2016.x = cW - 800;
    }
}

function stop_2017(){
    if (data5_2017.x >= cW - 100) {
        data5_2017.velocity.x = 0;
        data5_2017.x = cW - 100;
    }

    if (data4_2017.x >= cW - 200) {
        data4_2017.velocity.x = 0;
        data4_2017.x = cW - 200;
    }

    if (data3_2017.x >= cW - 400) {
        data3_2017.velocity.x = 0;
        data3_2017.x = cW - 400;
    }

    if (data2_2017.x >= cW - 600) {
        data2_2017.velocity.x = 0;
        data2_2017.x = cW - 600;
    }

    if (data1_2017.x >= cW -800) {
        data1_2017.velocity.x = 0;
        data1_2017.x = cW - 800;
    }
}

function stop_2018(){
    if (data5_2018.x >= cW - 100) {
        data5_2018.velocity.x = 0;
        data5_2018.x = cW - 100;
    }

    if (data4_2018.x >= cW - 200) {
        data4_2018.velocity.x = 0;
        data4_2018.x = cW - 200;
    }

    if (data3_2018.x >= cW - 400) {
        data3_2018.velocity.x = 0;
        data3_2018.x = cW - 400;
    }

    if (data2_2018.x >= cW - 600) {
        data2_2018.velocity.x = 0;
        data2_2018.x = cW - 600;
    }

    if (data1_2018.x >= cW - 800) {
        data1_2018.velocity.x = 0;
        data1_2018.x = cW - 800;
    }
}

function stop_2019(){
    if (data5_2019.x >= cW - 100) {
        data5_2019.velocity.x = 0;
        data5_2019.x = cW - 100;
    }

    if (data4_2019.x >= cW - 200) {
        data4_2019.velocity.x = 0;
        data4_2019.x = cW - 200;
    }

    if (data3_2019.x >= cW -400) {
        data3_2019.velocity.x = 0;
        data3_2019.x = cW - 400;
    }

    if (data2_2019.x >= cW - 600) {
        data2_2019.velocity.x = 0;
        data2_2019.x = cW - 600;
    }

    if (data1_2019.x >= cW - 800) {
        data1_2019.velocity.x = 0;
        data1_2019.x = cW - 800;
    }
}

function reverse(){

    if(counter == 2) {

        data1_2013.velocity.x = -10;
        if (data1_2013.x <= cW / 5) {
            data1_2013.velocity.x = 0;
        }

        data2_2013.velocity.x = -10;
        if (data2_2013.x <= cW / 5) {
            data2_2013.velocity.x = 0;
        }

        data3_2013.velocity.x = -10;
        if (data3_2013.x <= cW / 5) {
            data3_2013.velocity.x = 0;
        }

        data4_2013.velocity.x = -10;
        if (data4_2013.x <= cW / 5) {
            data4_2013.velocity.x = 0;
        }

        data5_2013.velocity.x = -10;
        if (data5_2013.x <= cW / 5) {
            data5_2013.velocity.x = 0;
            counter = 0;
        }

        //2014
        data1_2014.velocity.x = -10;
        if (data1_2014.x <= cW / 5) {
            data1_2014.velocity.x = 0;
        }

        data2_2014.velocity.x = -10;
        if (data2_2014.x <= cW / 5) {
            data2_2014.velocity.x = 0;
        }

        data3_2014.velocity.x = -10;
        if (data3_2014.x <= cW / 5) {
            data3_2014.velocity.x = 0;
        }

        data4_2014.velocity.x = -10;
        if (data4_2014.x <= cW / 5) {
            data4_2014.velocity.x = 0;
        }

        data5_2014.velocity.x = -10;
        if (data5_2014.x <= cW / 5) {
            data5_2014.velocity.x = 0;
            counter = 0;
        }

        //2015
        data1_2015.velocity.x = -10;
        if (data1_2015.x <= cW / 5) {
            data1_2015.velocity.x = 0;
        }

        data2_2015.velocity.x = -10;
        if (data2_2015.x <= cW / 5) {
            data2_2015.velocity.x = 0;
        }

        data3_2015.velocity.x = -10;
        if (data3_2015.x <= cW / 5) {
            data3_2015.velocity.x = 0;
        }

        data4_2015.velocity.x = -10;
        if (data4_2015.x <= cW / 5) {
            data4_2015.velocity.x = 0;
        }

        data5_2015.velocity.x = -10;
        if (data5_2015.x <= cW / 5) {
            data5_2015.velocity.x = 0;
            counter = 0;
        }

        //2016
        data1_2016.velocity.x = -10;
        if (data1_2016.x <= cW / 5) {
            data1_2016.velocity.x = 0;
        }

        data2_2016.velocity.x = -10;
        if (data2_2016.x <= cW / 5) {
            data2_2016.velocity.x = 0;
        }

        data3_2016.velocity.x = -10;
        if (data3_2016.x <= cW / 5) {
            data3_2016.velocity.x = 0;
        }

        data4_2016.velocity.x = -10;
        if (data4_2016.x <= cW / 5) {
            data4_2016.velocity.x = 0;
        }

        data5_2016.velocity.x = -10;
        if (data5_2016.x <= cW / 5) {
            data5_2016.velocity.x = 0;
            counter = 0;
        }

        //2017
        data1_2017.velocity.x = -10;
        if (data1_2017.x <= cW / 5) {
            data1_2017.velocity.x = 0;
        }

        data2_2017.velocity.x = -10;
        if (data2_2017.x <= cW / 5) {
            data2_2017.velocity.x = 0;
        }

        data3_2017.velocity.x = -10;
        if (data3_2017.x <= cW / 5) {
            data3_2017.velocity.x = 0;
        }

        data4_2017.velocity.x = -10;
        if (data4_2017.x <= cW / 5) {
            data4_2017.velocity.x = 0;
        }

        data5_2017.velocity.x = -10;
        if (data5_2017.x <= cW / 5) {
            data5_2017.velocity.x = 0;
            counter = 0;
        }

        //2018
        data1_2018.velocity.x = -10;
        if (data1_2018.x <= cW / 5) {
            data1_2018.velocity.x = 0;
        }

        data2_2018.velocity.x = -10;
        if (data2_2018.x <= cW / 5) {
            data2_2018.velocity.x = 0;
        }

        data3_2018.velocity.x = -10;
        if (data3_2018.x <= cW / 5) {
            data3_2018.velocity.x = 0;
        }

        data4_2018.velocity.x = -10;
        if (data4_2018.x <= cW / 5) {
            data4_2018.velocity.x = 0;
        }

        data5_2018.velocity.x = -10;
        if (data5_2018.x <= cW / 5) {
            data5_2018.velocity.x = 0;
            counter = 0;
        }

        //2019
        data1_2019.velocity.x = -10;
        if (data1_2019.x <= cW / 5) {
            data1_2019.velocity.x = 0;
        }

        data2_2019.velocity.x = -10;
        if (data2_2019.x <= cW / 5) {
            data2_2019.velocity.x = 0;
        }

        data3_2019.velocity.x = -10;
        if (data3_2019.x <= cW / 5) {
            data3_2019.velocity.x = 0;
        }

        data4_2019.velocity.x = -10;
        if (data4_2019.x <= cW / 5) {
            data4_2019.velocity.x = 0;
        }

        data5_2019.velocity.x = -10;
        if (data5_2019.x <= cW / 5) {
            data5_2019.velocity.x = 0;
            counter = 0;
        }
    }
}


//mousemove
canvas.addEventListener('mousemove', (e) =>{
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if(data5_2013.clickData(x,y) &&  data5_2013.x == cW - 100){
        data5_2013.radius = 11.35;
    }else {
        data5_2013.radius = 1.35;
    }

    if(data4_2013.clickData(x,y) &&  data4_2013.x == cW - 200){
        data4_2013.radius = 0;
    }else {
        data4_2013.radius = 0;
    }

    if(data3_2013.clickData(x,y) &&  data3_2013.x == cW - 400){
        data3_2013.radius = 35;
    }else {
        data3_2013.radius = 25;
    }

    if(data2_2013.clickData(x,y) &&  data2_2013.x == cW - 600){
        data2_2013.radius = 33.65;
    }else {
        data2_2013.radius = 23.65;
    }

    if(data1_2013.clickData(x,y) &&  data1_2013.x == cW - 800){
        data1_2013.radius = 60;
    }else {
        data1_2013.radius = 50;
    }

    //2014
    if(data5_2014.clickData(x,y) &&  data5_2014.x == cW - 100){
        data5_2014.radius = 11.25;
    }else {
        data5_2014.radius = 1.25;
    }

    if(data4_2014.clickData(x,y) &&  data4_2014.x == cW - 200){
        data4_2014.radius = 0;
    }else {
        data4_2014.radius = 0;
    }

    if(data3_2014.clickData(x,y) &&  data3_2014.x == cW - 400){
        data3_2014.radius = 33.75;
    }else {
        data3_2014.radius = 23.75;
    }

    if(data2_2014.clickData(x,y) &&  data2_2014.x == cW - 600){
        data2_2014.radius = 35;
    }else {
        data2_2014.radius = 25;
    }

    if(data1_2014.clickData(x,y) &&  data1_2014.x == cW - 800){
        data1_2014.radius = 60;
    }else {
        data1_2014.radius = 50;
    }

    //2015
    if(data5_2015.clickData(x,y) &&  data5_2015.x == cW - 100){
        data5_2015.radius = 12.8;
    }else {
        data5_2015.radius = 2.8;
    }

    if(data4_2015.clickData(x,y) &&  data4_2015.x == cW - 200){
        data4_2015.radius = 0;
    }else {
        data4_2015.radius = 0;
    }

    if(data3_2015.clickData(x,y) &&  data3_2015.x == cW - 400){
        data3_2015.radius = 35;
    }else {
        data3_2015.radius = 25;
    }

    if(data2_2015.clickData(x,y) &&  data2_2015.x == cW - 600){
        data2_2015.radius = 32.5;
    }else {
        data2_2015.radius = 22.5;
    }

    if(data1_2015.clickData(x,y) &&  data1_2015.x == cW - 800){
        data1_2015.radius = 60;
    }else {
        data1_2015.radius = 50;
    }

    //2016
    if(data5_2016.clickData(x,y) &&  data5_2016.x == cW - 100){
        data5_2016.radius = 11.75;
    }else {
        data5_2016.radius = 1.75;
    }

    if(data4_2016.clickData(x,y) &&  data4_2016.x == cW - 200){
        data4_2016.radius = 0;
    }else {
        data4_2016.radius = 0;
    }

    if(data3_2016.clickData(x,y) &&  data3_2016.x == cW - 400){
        data3_2016.radius = 31.2;
    }else {
        data3_2016.radius = 21.2;
    }

    if(data2_2016.clickData(x,y) &&  data2_2016.x == cW - 600){
        data2_2016.radius = 37.05;
    }else {
        data2_2016.radius = 27.05;
    }

    if(data1_2016.clickData(x,y) &&  data1_2016.x == cW - 800){
        data1_2016.radius = 60;
    }else {
        data1_2016.radius = 50;
    }

    //2017
    if(data5_2017.clickData(x,y) &&  data5_2017.x == cW - 100){
        data5_2017.radius = 11.85;
    }else {
        data5_2017.radius = 1.85;
    }

    if(data4_2017.clickData(x,y) &&  data4_2017.x == cW - 200){
        data4_2017.radius = 14.95;
    }else {
        data4_2017.radius = 4.95;
    }

    if(data3_2017.clickData(x,y) &&  data3_2017.x == cW - 400){
        data3_2017.radius = 31.6;
    }else {
        data3_2017.radius = 21.6;
    }

    if(data2_2017.clickData(x,y) &&  data2_2017.x == cW - 600){
        data2_2017.radius = 31.6;
    }else {
        data2_2017.radius = 21.6;
    }

    if(data1_2017.clickData(x,y) &&  data1_2017.x == cW - 800){
        data1_2017.radius = 60;
    }else {
        data1_2017.radius = 50;
    }

    //2018
    if(data5_2018.clickData(x,y) &&  data5_2018.x == cW - 100){
        data5_2018.radius = 11.55;
    }else {
        data5_2018.radius = 1.55;
    }

    if(data4_2018.clickData(x,y) &&  data4_2018.x == cW - 200){
        data4_2018.radius = 12.3;
    }else {
        data4_2018.radius = 2.3;
    }

    if(data3_2018.clickData(x,y) &&  data3_2018.x == cW - 400){
        data3_2018.radius = 30;
    }else {
        data3_2018.radius = 20;
    }

    if(data2_2018.clickData(x,y) &&  data2_2018.x == cW - 600){
        data2_2018.radius = 36.15;
    }else {
        data2_2018.radius = 26.15;
    }

    if(data1_2018.clickData(x,y) &&  data1_2018.x == cW - 800){
        data1_2018.radius = 60;
    }else {
        data1_2018.radius = 50;
    }

    //2019
    if(data5_2019.clickData(x,y) &&  data5_2019.x == cW - 100){
        data5_2019.radius = 13.65;
    }else {
        data5_2019.radius = 3.65;
    }

    if(data4_2019.clickData(x,y) &&  data4_2019.x == cW - 200){
        data4_2019.radius = 11.2;
    }else {
        data4_2019.radius = 1.2;
    }

    if(data3_2019.clickData(x,y) &&  data3_2019.x == cW - 400){
        data3_2019.radius = 28.9;
    }else {
        data3_2019.radius = 18.5;
    }

    if(data2_2019.clickData(x,y) &&  data2_2019.x == cW - 600){
        data2_2019.radius = 36.2;
    }else {
        data2_2019.radius = 26.2;
    }

    if(data1_2019.clickData(x,y) &&  data1_2019.x == cW - 800){
        data1_2019.radius = 60;
    }else {
        data1_2019.radius = 50;
    }

});



function plugin(){
    if(data5_2013.radius == 11.35 &&  data5_2013.x == cW - 100){
        whrite("2.7%", '20px Brahmans', '#662483', 'center',
            data5_2013.x + data5_2013.radius + 30, 100);
        whrite("N: 2", '20px Brahmans', '#662483', 'center',
            data5_2013.x - data5_2013.radius - 30, 100);
    }

    if(data3_2013.radius == 35 &&  data3_2013.x == cW - 400){
        whrite("50%", '20px Brahmans', '#70B62B', 'center',
            data3_2013.x + data3_2013.radius + 30, 100);
        whrite("N: 37", '20px Brahmans', '#70B62B', 'center',
            data3_2013.x - data3_2013.radius -30, 100);
    }

    if(data2_2013.radius == 33.65  &&  data2_2013.x == cW - 600){
        whrite("47,3%", '20px Brahmans', '#312783', 'center',
            data2_2013.x + data2_2013.radius + 30, 100);
        whrite("N: 35", '20px Brahmans', '#312783', 'center',
            data2_2013.x - data2_2013.radius - 30, 100);
    }

    if(data1_2013.radius == 60  &&  data1_2013.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2013.x+data1_2013.radius +30, 100);
        whrite("N: 74", '20px Brahmans', '#E6007E', 'center',
            data1_2013.x- data1_2013.radius-30, 100);
    }
    //2014
    if(data5_2014.radius == 11.25 &&  data5_2014.x == cW - 100){
        whrite("2.5%", '20px Brahmans', '#662483', 'center',
            data5_2014.x + data5_2014.radius + 30, 250);
        whrite("N: 2", '20px Brahmans', '#662483', 'center',
            data5_2014.x - data5_2014.radius - 30, 250);
    }

    if(data3_2014.radius == 33.75  &&  data3_2014.x == cW - 400){
        whrite("47.5%", '20px Brahmans', '#70B62B', 'center',
            data3_2014.x + data3_2014.radius + 30, 250);
        whrite("N: 38", '20px Brahmans', '#70B62B', 'center',
            data3_2014.x - data3_2014.radius -30, 250);
    }

    if(data2_2014.radius == 35 &&  data2_2014.x == cW - 600){
        whrite("50%", '20px Brahmans', '#312783', 'center',
            data2_2014.x + data2_2014.radius + 30, 250);
        whrite("N: 40", '20px Brahmans', '#312783', 'center',
            data2_2014.x - data2_2014.radius - 30, 250);
    }

    if(data1_2014.radius == 60  &&  data1_2014.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2014.x+data1_2014.radius +30, 250);
        whrite("N: 80", '20px Brahmans', '#E6007E', 'center',
            data1_2014.x- data1_2014.radius-30, 250);
    }

    //2015
    if(data5_2015.radius == 12.8 &&  data5_2015.x == cW - 100){
        whrite("5.6%", '20px Brahmans', '#662483', 'center',
            data5_2015.x + data5_2015.radius + 30, 400);
        whrite("N: 5", '20px Brahmans', '#662483', 'center',
            data5_2015.x - data5_2015.radius - 30, 400);
    }

    if(data3_2015.radius == 35  &&  data3_2015.x == cW - 400){
        whrite("50%", '20px Brahmans', '#70B62B', 'center',
            data3_2015.x + data3_2015.radius + 30, 400);
        whrite("N: 45", '20px Brahmans', '#70B62B', 'center',
            data3_2015.x - data3_2015.radius -30, 400);
    }

    if(data2_2015.radius == 32.5 &&  data2_2015.x == cW - 600){
        whrite("44.4%", '20px Brahmans', '#312783', 'center',
            data2_2015.x + data2_2015.radius + 30, 400);
        whrite("N: 40", '20px Brahmans', '#312783', 'center',
            data2_2015.x - data2_2015.radius - 30, 400);
    }

    if(data1_2015.radius == 60  &&  data1_2015.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2015.x+data1_2015.radius +30, 400);
        whrite("N: 90", '20px Brahmans', '#E6007E', 'center',
            data1_2015.x- data1_2015.radius-30, 400);
    }

    //2016
    if(data5_2016.radius == 11.75 &&  data5_2016.x == cW - 100){
        whrite("3.5%", '20px Brahmans', '#662483', 'center',
            data5_2016.x + data5_2016.radius + 30, 550);
        whrite("N: 5", '20px Brahmans', '#662483', 'center',
            data5_2016.x - data5_2016.radius - 30, 550);
    }

    if(data3_2016.radius == 31.2  &&  data3_2016.x == cW - 400){
        whrite("42.4%", '20px Brahmans', '#70B62B', 'center',
            data3_2016.x + data3_2016.radius + 30, 550);
        whrite("N: 36", '20px Brahmans', '#70B62B', 'center',
            data3_2016.x - data3_2016.radius -30, 550);
    }

    if(data2_2016.radius == 37.05 &&  data2_2016.x == cW - 600){
        whrite("54.1%", '20px Brahmans', '#312783', 'center',
            data2_2016.x + data2_2016.radius + 30, 550);
        whrite("N: 46", '20px Brahmans', '#312783', 'center',
            data2_2016.x - data2_2016.radius - 30, 550);
    }

    if(data1_2016.radius == 60  &&  data1_2016.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2016.x+data1_2016.radius +30, 550);
        whrite("N: 85", '20px Brahmans', '#E6007E', 'center',
            data1_2016.x- data1_2016.radius-30, 550);
    }

    //2017
    if(data5_2017.radius == 11.85 &&  data5_2017.x == cW - 100){
        whrite("3.7%", '20px Brahmans', '#662483', 'center',
            data5_2017.x + data5_2017.radius + 30, 700);
        whrite("N: 3", '20px Brahmans', '#662483', 'center',
            data5_2017.x - data5_2017.radius - 30, 700);
    }

    if(data4_2017.radius == 14.95 &&  data4_2017.x == cW - 200){
        whrite("9.9%", '20px Brahmans', '#E7302A', 'center',
            data4_2017.x + data4_2017.radius + 30, 700);
        whrite("N: 8", '20px Brahmans', '#E7302A', 'center',
            data4_2017.x - data4_2017.radius - 30, 700);
    }

    if(data3_2017.radius == 31.6  &&  data3_2017.x == cW - 400){
        whrite("43.2%", '20px Brahmans', '#70B62B', 'center',
            data3_2017.x + data3_2017.radius + 30, 700);
        whrite("N: 35", '20px Brahmans', '#70B62B', 'center',
            data3_2017.x - data3_2017.radius -30, 700);
    }

    if(data2_2017.radius == 31.6 &&  data2_2017.x == cW - 600){
        whrite("43.2%", '20px Brahmans', '#312783', 'center',
            data2_2017.x + data2_2017.radius + 30, 700);
        whrite("N: 35", '20px Brahmans', '#312783', 'center',
            data2_2017.x - data2_2017.radius - 30, 700);
    }

    if(data1_2017.radius == 60  &&  data1_2017.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2017.x+data1_2017.radius +30, 700);
        whrite("N: 81", '20px Brahmans', '#E6007E', 'center',
            data1_2017.x- data1_2017.radius-30, 700);
    }

    //2018
    if(data5_2018.radius == 11.55 &&  data5_2018.x == cW - 100){
        whrite("3.1%", '20px Brahmans', '#662483', 'center',
            data5_2018.x + data5_2018.radius + 30, 850);
        whrite("N: 2", '20px Brahmans', '#662483', 'center',
            data5_2018.x - data5_2018.radius - 30, 850);
    }

    if(data4_2018.radius == 12.3 &&  data4_2018.x == cW - 200){
        whrite("4.6%", '20px Brahmans', '#E7302A', 'center',
            data4_2018.x + data4_2018.radius + 30, 850);
        whrite("N: 3", '20px Brahmans', '#E7302A', 'center',
            data4_2018.x - data4_2018.radius - 30, 850);
    }

    if(data3_2018.radius == 30 &&  data3_2018.x == cW - 400){
        whrite("40%", '20px Brahmans', '#70B62B', 'center',
            data3_2018.x + data3_2018.radius + 30, 850);
        whrite("N: 26", '20px Brahmans', '#70B62B', 'center',
            data3_2018.x - data3_2018.radius -30, 850);
    }

    if(data2_2018.radius == 36.15 &&  data2_2018.x == cW - 600){
        whrite("52.3%", '20px Brahmans', '#312783', 'center',
            data2_2018.x + data2_2018.radius + 30, 850);
        whrite("N: 34", '20px Brahmans', '#312783', 'center',
            data2_2018.x - data2_2018.radius - 30, 850);
    }

    if(data1_2018.radius == 60  &&  data1_2018.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2018.x+data1_2018.radius +30, 850);
        whrite("N: 65", '20px Brahmans', '#E6007E', 'center',
            data1_2018.x- data1_2018.radius-30, 850);
    }

    //2019
    if(data5_2019.radius == 13.65 &&  data5_2019.x == cW - 100){
        whrite("7.3%", '20px Brahmans', '#662483', 'center',
            data5_2019.x + data5_2019.radius + 30, 1000);
        whrite("N: 6", '20px Brahmans', '#662483', 'center',
            data5_2019.x - data5_2019.radius - 30, 1000);
    }

    if(data4_2019.radius == 11.2 &&  data4_2019.x == cW - 200){
        whrite("2.4%", '20px Brahmans', '#E7302A', 'center',
            data4_2019.x + data4_2019.radius + 30, 1000);
        whrite("N: 2", '20px Brahmans', '#E7302A', 'center',
            data4_2019.x - data4_2019.radius - 30, 1000);
    }

    if(data3_2019.radius == 28.9 &&  data3_2019.x == cW - 400){
        whrite("37.8%", '20px Brahmans', '#70B62B', 'center',
            data3_2019.x + data3_2019.radius + 30, 1000);
        whrite("N: 31", '20px Brahmans', '#70B62B', 'center',
            data3_2019.x - data3_2019.radius -30, 1000);
    }

    if(data2_2019.radius == 36.2 &&  data2_2019.x == cW - 600){
        whrite("52.4%", '20px Brahmans', '#312783', 'center',
            data2_2019.x + data2_2019.radius + 30, 1000);
        whrite("N: 43", '20px Brahmans', '#312783', 'center',
            data2_2019.x - data2_2019.radius - 30, 1000);
    }

    if(data1_2019.radius == 60  &&  data1_2019.x == cW - 800){
        whrite("100%", '20px Brahmans', '#E6007E', 'center',
            data1_2019.x+data1_2019.radius +30, 1000);
        whrite("N: 82", '20px Brahmans', '#E6007E', 'center',
            data1_2019.x- data1_2019.radius-30, 1000);
    }
}

//EventListener
document.addEventListener('keydown', function(event){
    var key_press = String.fromCharCode(event.keyCode);

    if (key_press == 'R') {
        if( data5_2013.x == cW - 100){
            whrite("2.7%", '15px Brahmans', '#662483', 'center',
                data5_2013.x + data5_2013.radius + 30, 100);
            whrite("N: 2", '15px Brahmans', '#662483', 'center',
                data5_2013.x - data5_2013.radius - 30, 100);
        }

        if( data3_2013.x == cW - 400){
            whrite("50%", '15px Brahmans', '#70B62B', 'center',
                data3_2013.x + data3_2013.radius + 30, 100);
            whrite("N: 37", '15px Brahmans', '#70B62B', 'center',
                data3_2013.x - data3_2013.radius -30, 100);
        }

        if( data2_2013.x == cW - 600){
            whrite("47,3%", '15px Brahmans', '#312783', 'center',
                data2_2013.x + data2_2013.radius + 30, 100);
            whrite("N: 35", '20px Brahmans', '#312783', 'center',
                data2_2013.x - data2_2013.radius - 30, 100);
        }

        if(data1_2013.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2013.x+data1_2013.radius +30, 100);
            whrite("N: 74", '15px Brahmans', '#E6007E', 'center',
                data1_2013.x- data1_2013.radius-30, 100);
        }
        //2014
        if( data5_2014.x == cW - 100){
            whrite("2.5%", '15px Brahmans', '#662483', 'center',
                data5_2014.x + data5_2014.radius + 30, 250);
            whrite("N: 2", '15px Brahmans', '#662483', 'center',
                data5_2014.x - data5_2014.radius - 30, 250);
        }

        if( data3_2014.x == cW - 400){
            whrite("47.5%", '15px Brahmans', '#70B62B', 'center',
                data3_2014.x + data3_2014.radius + 30, 250);
            whrite("N: 38", '15px Brahmans', '#70B62B', 'center',
                data3_2014.x - data3_2014.radius -30, 250);
        }

        if( data2_2014.x == cW - 600){
            whrite("50%", '15px Brahmans', '#312783', 'center',
                data2_2014.x + data2_2014.radius + 30, 250);
            whrite("N: 40", '15px Brahmans', '#312783', 'center',
                data2_2014.x - data2_2014.radius - 30, 250);
        }

        if( data1_2014.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2014.x+data1_2014.radius +30, 250);
            whrite("N: 80", '15px Brahmans', '#E6007E', 'center',
                data1_2014.x- data1_2014.radius-30, 250);
        }

        //2015
        if( data5_2015.x == cW - 100){
            whrite("5.6%", '15px Brahmans', '#662483', 'center',
                data5_2015.x + data5_2015.radius + 30, 400);
            whrite("N: 5", '15px Brahmans', '#662483', 'center',
                data5_2015.x - data5_2015.radius - 30, 400);
        }

        if( data3_2015.x == cW - 400){
            whrite("50%", '15px Brahmans', '#70B62B', 'center',
                data3_2015.x + data3_2015.radius + 30, 400);
            whrite("N: 45", '15px Brahmans', '#70B62B', 'center',
                data3_2015.x - data3_2015.radius -30, 400);
        }

        if( data2_2015.x == cW - 600){
            whrite("44.4%", '15px Brahmans', '#312783', 'center',
                data2_2015.x + data2_2015.radius + 30, 400);
            whrite("N: 40", '15px Brahmans', '#312783', 'center',
                data2_2015.x - data2_2015.radius - 30, 400);
        }

        if( data1_2015.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2015.x+data1_2015.radius +30, 400);
            whrite("N: 90", '15px Brahmans', '#E6007E', 'center',
                data1_2015.x- data1_2015.radius-30, 400);
        }

        //2016
        if( data5_2016.x == cW - 100){
            whrite("3.5%", '15px Brahmans', '#662483', 'center',
                data5_2016.x + data5_2016.radius + 30, 550);
            whrite("N: 5", '15px Brahmans', '#662483', 'center',
                data5_2016.x - data5_2016.radius - 30, 550);
        }

        if(data3_2016.x == cW - 400){
            whrite("42.4%", '15px Brahmans', '#70B62B', 'center',
                data3_2016.x + data3_2016.radius + 30, 550);
            whrite("N: 36", '15px Brahmans', '#70B62B', 'center',
                data3_2016.x - data3_2016.radius -30, 550);
        }

        if( data2_2016.x == cW - 600){
            whrite("54.1%", '15px Brahmans', '#312783', 'center',
                data2_2016.x + data2_2016.radius + 30, 550);
            whrite("N: 46", '15px Brahmans', '#312783', 'center',
                data2_2016.x - data2_2016.radius - 30, 550);
        }

        if(data1_2016.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2016.x+data1_2016.radius +30, 550);
            whrite("N: 85", '15px Brahmans', '#E6007E', 'center',
                data1_2016.x- data1_2016.radius-30, 550);
        }

        //2017
        if( data5_2017.x == cW - 100){
            whrite("3.7%", '15px Brahmans', '#662483', 'center',
                data5_2017.x + data5_2017.radius + 30, 700);
            whrite("N: 3", '15px Brahmans', '#662483', 'center',
                data5_2017.x - data5_2017.radius - 30, 700);
        }

        if(data4_2017.x == cW - 200){
            whrite("9.9%", '15px Brahmans', '#E7302A', 'center',
                data4_2017.x + data4_2017.radius + 30, 700);
            whrite("N: 8", '15px Brahmans', '#E7302A', 'center',
                data4_2017.x - data4_2017.radius - 30, 700);
        }

        if( data3_2017.x == cW - 400){
            whrite("43.2%", '15px Brahmans', '#70B62B', 'center',
                data3_2017.x + data3_2017.radius + 30, 700);
            whrite("N: 35", '15px Brahmans', '#70B62B', 'center',
                data3_2017.x - data3_2017.radius -30, 700);
        }

        if( data2_2017.x == cW - 600){
            whrite("43.2%", '15px Brahmans', '#312783', 'center',
                data2_2017.x + data2_2017.radius + 30, 700);
            whrite("N: 35", '15px Brahmans', '#312783', 'center',
                data2_2017.x - data2_2017.radius - 30, 700);
        }

        if( data1_2017.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2017.x+data1_2017.radius +30, 700);
            whrite("N: 81", '15px Brahmans', '#E6007E', 'center',
                data1_2017.x- data1_2017.radius-30, 700);
        }

        //2018
        if( data5_2018.x == cW - 100){
            whrite("3.1%", '15px Brahmans', '#662483', 'center',
                data5_2018.x + data5_2018.radius + 30, 850);
            whrite("N: 2", '15px Brahmans', '#662483', 'center',
                data5_2018.x - data5_2018.radius - 30, 850);
        }

        if( data4_2018.x == cW - 200){
            whrite("4.6%", '15px Brahmans', '#E7302A', 'center',
                data4_2018.x + data4_2018.radius + 30, 850);
            whrite("N: 3", '15px Brahmans', '#E7302A', 'center',
                data4_2018.x - data4_2018.radius - 30, 850);
        }

        if( data3_2018.x == cW - 400){
            whrite("40%", '15px Brahmans', '#70B62B', 'center',
                data3_2018.x + data3_2018.radius + 30, 850);
            whrite("N: 26", '15px Brahmans', '#70B62B', 'center',
                data3_2018.x - data3_2018.radius -30, 850);
        }

        if(data2_2018.x == cW - 600){
            whrite("52.3%", '15px Brahmans', '#312783', 'center',
                data2_2018.x + data2_2018.radius + 30, 850);
            whrite("N: 34", '15px Brahmans', '#312783', 'center',
                data2_2018.x - data2_2018.radius - 30, 850);
        }

        if( data1_2018.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2018.x+data1_2018.radius +30, 850);
            whrite("N: 65", '15px Brahmans', '#E6007E', 'center',
                data1_2018.x- data1_2018.radius-30, 850);
        }

        //2019
        if( data5_2019.x == cW - 100){
            whrite("7.3%", '15px Brahmans', '#662483', 'center',
                data5_2019.x + data5_2019.radius + 30, 1000);
            whrite("N: 6", '15px Brahmans', '#662483', 'center',
                data5_2019.x - data5_2019.radius - 30, 1000);
        }

        if( data4_2019.x == cW - 200){
            whrite("2.4%", '15px Brahmans', '#E7302A', 'center',
                data4_2019.x + data4_2019.radius + 30, 1000);
            whrite("N: 2", '15px Brahmans', '#E7302A', 'center',
                data4_2019.x - data4_2019.radius - 30, 1000);
        }

        if(  data3_2019.x == cW - 400){
            whrite("37.8%", '15px Brahmans', '#70B62B', 'center',
                data3_2019.x + data3_2019.radius + 30, 1000);
            whrite("N: 31", '15px Brahmans', '#70B62B', 'center',
                data3_2019.x - data3_2019.radius -30, 1000);
        }

        if( data2_2019.x == cW - 600){
            whrite("52.4%", '15px Brahmans', '#312783', 'center',
                data2_2019.x + data2_2019.radius + 30, 1000);
            whrite("N: 43", '15px Brahmans', '#312783', 'center',
                data2_2019.x - data2_2019.radius - 30, 1000);
        }

        if( data1_2019.x == cW - 800){
            whrite("100%", '15px Brahmans', '#E6007E', 'center',
                data1_2019.x+data1_2019.radius +30, 1000);
            whrite("N: 82", '15px Brahmans', '#E6007E', 'center',
                data1_2019.x- data1_2019.radius-30, 1000);
        }
    }
});



function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0, 0.1)';
    ctx.fillRect(0, 0, cW, cH);

    whrite("gesamt", '20px Brahmans', 'azure', 'center',
        cW-800, 15);
    whrite("allg. HZB", '20px Brahmans', 'azure', 'center',
        cW-600, 15);
    whrite("FH-Reife", '20px Brahmans', 'azure', 'center',
        cW-400, 15);
    whrite("BQ", '20px Brahmans', 'azure', 'center',
        cW-200, 15);
    whrite("ausl. HZB", '20px Brahmans', 'azure', 'center',
        cW-100, 15);
    whrite("BQ : Beruflich Qualifizierte", '20px Brahmans', 'azure', 'center',
        cW-200, 1095);

    stop_2013();
    stop_2014();
    stop_2015();
    stop_2016();
    stop_2017();
    stop_2018();
    stop_2019();

    reverse();

    plugin();

    whrite("2013", '20px Brahmans', 'azure', 'center',
        cW/5-200,  100);
    data1_2013.update();
    data2_2013.update();
    data3_2013.update();
    data4_2013.update();
    data5_2013.update();

    whrite("2014", '20px Brahmans', 'azure', 'center',
        cW/5-200,  250);
    data1_2014.update();
    data2_2014.update();
    data3_2014.update();
    data4_2014.update();
    data5_2014.update();

    whrite("2015", '20px Brahmans', 'azure', 'center',
        cW/5-200,  400);
    data1_2015.update();
    data2_2015.update();
    data3_2015.update();
    data4_2015.update();
    data5_2015.update();

    whrite("2016", '20px Brahmans', 'azure', 'center',
        cW/5-200,  550);
    data1_2016.update();
    data2_2016.update();
    data3_2016.update();
    data4_2016.update();
    data5_2016.update();

    whrite("2017", '20px Brahmans', 'azure', 'center',
        cW/5-200,  700);
    data1_2017.update();
    data2_2017.update();
    data3_2017.update();
    data4_2017.update();
    data5_2017.update();

    whrite("2018", '20px Brahmans', 'azure', 'center',
        cW/5-200,  850);
    data1_2018.update();
    data2_2018.update();
    data3_2018.update();
    data4_2018.update();
    data5_2018.update();

    whrite("2019", '20px Brahmans', 'azure', 'center',
        cW/5-200,  1000);
    data1_2019.update();
    data2_2019.update();
    data3_2019.update();
    data4_2019.update();
    data5_2019.update();
}

animate();
