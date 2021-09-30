


var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext("2d");

var z = true;






ctx.font = "45px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("スペースキーをおせ", 40, 100);


document.addEventListener('keydown', Down);

function Down(e){

    
    

    

    if(e.key==" "){
        if(z){

        
        ctx.clearRect(0, 0, 3303, 1500);
        countdown();
        }
z=false;





        


    }



    



}



function countdown(){
    setTimeout(function(){        ctx.clearRect(0, 0, 3303, 1500);

        ctx.font = "45px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("3", 40, 100);
    },1)
    setTimeout(function(){        ctx.clearRect(0, 0, 3303, 1500);

        ctx.font = "45px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("2", 40, 100);
    },1000)
    setTimeout(function(){        ctx.clearRect(0, 0, 3303, 1500);

        ctx.font = "45px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("1", 40, 100);
    },2000)
    setTimeout(function(){        ctx.clearRect(0, 0, 3303, 1500);

        ctx.font = "45px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("スタート", 40, 100);
    },3000)
    setTimeout(function(){        ctx.clearRect(0, 0, 3303, 1500);


        var script = document.createElement('script');
        script.src = "index.js"; 
        document.head.appendChild(script);



    },4000)
}









