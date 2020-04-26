let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");

let button = document.getElementById("button");

let users = [];

button.onclick = function(e) {
  e.preventDefault();

  let nameValue = name.value;
  let surnameValue = surname.value;
  let ageValue = age.value;

  if (nameValue !== "" && surnameValue !== "" && ageValue !== "") {
    if (!Number.isNaN(Number(ageValue))) {
      let user = {
        name: nameValue,
        surname: surnameValue,
        age: Number(ageValue)
      };
      users.push(user);
      name.value = "";
      surname.value = "";
      age.value = "";
      renderUsers(users);
    } else {
      console.log("Возраст не число");
    }
  } else {
    console.log("заполните поля");
  }
};

function renderUsers(userList) {
  let table = document.getElementById("table");
  let tableBody = `<tr>
    <th>#</th>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>`;
  userList.forEach(function(user, index) {
    tableBody =
      tableBody +
      `<tr>
      <td>#${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.surname}</td>
      <td>${user.age}</td>
      </tr>`;
  });
  table.innerHTML = tableBody;
}
