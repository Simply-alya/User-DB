let button = document.getElementById("button");

let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");

button.onclick = function(event) {
  event.preventDefault();

  let nameValue = name.value;
  let surnameValue = surname.value;
  let ageValue = age.value;

  if (nameValue !== "" && surnameValue !== "" && ageValue !== "") {
    if (!Number.isNaN(Number(ageValue))) {
      console.log(`Hi, ${nameValue} ${surnameValue}! Welcome!`);
    } else {
      console.log("not valid age data");
    }
  } else {
    console.log(`fill in all fields`);
  }
};
