function add(amount, textbox) {
  console.log(textbox.innerHTML, textbox.value);
  Number(textbox.value) = Number(textbox.value) += Number(amount);
};
