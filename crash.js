function crashpc(tabs) {
  let count = 0;
  while (count < Number(tabs)) {
      window.open('', '_blank');
      count++;
  }
}
