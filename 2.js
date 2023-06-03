var block = document.querySelector("#block");

  
  document.addEventListener("mousedown", function(event) {

   
    
    if (event.button == 0) {
      
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      

      
      block.style.top = mouseY + "px";
      block.style.left = mouseX + "px";

      
      block.style.transform = "translate(-50%, -50%)";
    }
  });