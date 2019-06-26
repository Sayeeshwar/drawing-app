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


    canvas.addEventListener('mousedown',startPosition);
    canvas.addEventListener('mouseup',finishPosition);
    
});

function resize()
{
    
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
}

window.addEventListener('resize',resize());