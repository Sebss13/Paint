
let box=document.body



document.onmousemove=(event)=>{
    var createeye=document.createElement('div')
    createeye.setAttribute("id","eyeBall")
box.appendChild(createeye)  
  var x=event.clientX*100/window.innerWidth+"%"
    var y=event.clientY*100/window.innerHeight+"%"
    createeye.style.transition='.01s'
    createeye.style.left=x
    createeye.style.top=y
    setTimeout(createeye,10)
}









