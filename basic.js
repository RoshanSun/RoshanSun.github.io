function funcClick() {
    // body...
    var x = document.getElementById("mypara");
    //x.innerHTML = "Hello, World!!! From JavaScript";
    x.innerHTML = Date();
    
    var array = [1,2,3,4,5,6,7];
    var i;
    var text;
    for(i = 1; i < array.length; i++){
        text += array[i] + "<br>";
    }
    x.innerHTML = text;
}

function bobbleDog() {
    var x = document.getElementById("bobsaget");
    x.style.color = "green";
    x.style.background = "blue";
    document.body.style.background = "yellow";
}