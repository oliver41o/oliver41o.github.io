function add(amount, textbox) {
  console.log(Number(textbox.value));
  textbox.value = Number(textbox.value) += Number(amount);
};
