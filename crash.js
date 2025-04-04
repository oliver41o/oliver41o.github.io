function crashpc() {
 for (var i = 5; i > 3; i = i + 1) {
    var x = document.createElement("div");
    x.innerText = i;
  
    document.body.appendChild(x);
    document.body.appendChild(x);
    document.body.appendChild(x);
    console.log(x);
    console.log(i); 
 };
};
