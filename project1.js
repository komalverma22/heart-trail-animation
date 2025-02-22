const heart=document.querySelector("body");

heart.addEventListener("mousemove",(event)=>{
   const Xpos=event.offsetX;
   const Ypos=event.offsetY;
   
   const spanE1=document.createElement("span");
   spanE1.style.left=Xpos+"px";
   spanE1.style.top=Ypos+"px";
    const size=Math.random()*100;
    spanE1.style.width=size+"px";
    spanE1.style.height=size+"px";
   setTimeout(()=>{
    spanE1.remove();
   },3000);
   heart.appendChild(spanE1)
});