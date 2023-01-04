function darkTheme(){
    var head = document.getElementsByTagName(head);
    var link = document.getElementsByTagName(link);
    //setting the attribute values to elements
    link.rel  = "stylesheet";
    link.href = "dark.css";
    head.appendChild(link);
}