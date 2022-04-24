function changeMode(){

    let mode = document.getElementById("site_theme");
    let mode_value = mode.getAttribute("value");
    theme = document.getElementById("css_theme");
    if(mode_value == "lightmode"){
        theme.setAttribute("href", "assets/css/dark_theme.css");
        mode.setAttribute("value", "darkmode");
    }
    else{
        theme.setAttribute("href", "assets/css/light_theme.css");
        mode.setAttribute("value", "lightmode");
    }
}
function computer_theme(){ //Identify computer theme and use in site
    let mode = document.getElementById("site_theme");
    let mode_value = mode.getAttribute("value");
    theme = document.getElementById("css_theme");
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        theme.setAttribute("href", "assets/css/dark_theme.css");
        mode.setAttribute("value", "darkmode");
        mode.checked = true;
    } else {
        theme.setAttribute("href", "assets/css/light_theme.css");
        mode.setAttribute("value", "lightmode");
    }
}