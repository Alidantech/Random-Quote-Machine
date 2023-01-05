function darkTheme(){
    var head = document.getElementsByTagName('head');
    var link = document.createElement('link');
    //setting the attribute values to elements
    
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "darkMode.css";
    head.appendChild(link);
}
function lightTheme(){
    var head = document.getElementsByTagName("head");
    var link = document.createElement("link ");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "lightMode.css";
    head.appendChild(link);
}