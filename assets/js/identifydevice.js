function isMobile(){
    css = document.getElementById("device_css");
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        css.setAttribute("href", "assets/css/mobile.css");
     }
     else{
        css.setAttribute("href", "assets/css/computer.css");
     }
} 