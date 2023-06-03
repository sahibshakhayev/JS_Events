let blocks = document.querySelectorAll(".con-1 div");

let colors = ["red", "green", "blue"];
for (let i = 0; i < 3; i++) {
  blocks[i].style.backgroundColor = colors[i];
}


let bottomBlock = document.querySelector(".con-2 div");
bottomBlock.style.backgroundColor = "gray";


for (let i = 0; i < 3; i++) {
  
  blocks[i].addEventListener("mouseover", function() {
   
    bottomBlock.style.backgroundColor = colors[i];
  });
  
  
  blocks[i].addEventListener("mouseout", function() {
    
    bottomBlock.style.backgroundColor = "gray";
  });
}