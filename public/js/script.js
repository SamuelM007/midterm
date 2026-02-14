document.getElementById("form").onsubmit = () => {
  let isValid = true;
  clearErrors();

  let destination = document.getElementById("destination").value.trim();
  if (destination == "none") {
    document.getElementById("err-des").style.display = "block";
    isValid = false;
  }

  let number = document.getElementById("number").value.trim();
  if (number <= 0) {
    document.getElementById("err-num").style.display = "block";
    isValid = false;
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("err");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
