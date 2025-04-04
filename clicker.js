function add(amount, textbox) {
  console.log(toNumber(textbox.value));
  textbox.value = Number(textbox.value) += Number(amount);
};
