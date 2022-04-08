function isMobile(){
    result = document.getElementById("identificator");
    css = document.getElementById("css");
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        css.setAttribute("href", "assets/css/mobile.css");
   }
   else{
        result = document.getElementById("identificator");
        css.setAttribute("href", "assets/css/computer.css");
   }
} 