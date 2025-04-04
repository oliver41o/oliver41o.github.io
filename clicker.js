function add(amount, textbox) {
  console.log(textbox.innerHTML, textbox.value);
  textbox.innerHTML = textbox.value += amount;
};
