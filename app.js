window.addEventListener('load',()=>{
    
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let painting = false;

    function startPosition(e){
        painting=true;
        ctx.beginPath();
        draw(e);
        
    }
    function finishPosition(){
        painting=false;
        ctx.endpath();
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth=10;
        ctx.lineCap="round";
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
        
    }
    
    function erase(){
        

        ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    //console.log("window width: "+ canvas.width+ "window height: "+canvas.height);
    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',finishPosition);
    canvas.addEventListener('mousemove',draw);    
    canvas.addEventListener('keydown',erase);
});

function resize()
{
    canvas.height=window.innerHeight;
    canvas.width= window.innerWidth;
}

window.addEventListener('resize',resize());