window.addEventListener('load',()=>{
    
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let painting = false;
    
});

function resize()
{
    
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
}

window.addEventListener('resize',resize());