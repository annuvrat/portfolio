
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function circlemousefollower(){
    window.addEventListener("mousemove",function(){
    document.querySelector("#circle").style.transform = 'translate(${dets.clientx}px,${dets.clienty}px)'
    })
}

circlemousefollower();
