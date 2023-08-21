function moreImages(){
    var moreBlock = document.getElementById("moreSectionBlock");
    moreBlock.classList.remove("more_section");   
     var moreBlockbtn = document.getElementById("buttonMore");
     moreBlockbtn.classList.add("more_section");


}

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

