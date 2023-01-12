function darkTheme(){
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    //setting the attribute values to elements
    link.rel  = "stylesheet";
    link.type = "text/css";
    link.href = "darkMode.css";
    head.appendChild(link);
    //document.getElementsById('dark').style.display = 'none';
}
function lightTheme(){
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "lightMode.css";
    head.appendChild(link);
   // document.getElementById('light').style.display = 'none';
}
