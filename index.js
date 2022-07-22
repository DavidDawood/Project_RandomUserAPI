import { GetJsonUser } from "./randomUser.js";
let isBuffering = false;

const img = document.getElementById("img");
const name = document.getElementById("name");
const gender = document.getElementById("gender");
const age = document.getElementById("age");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const userName = document.getElementById("userName");
const password = document.getElementById("password");

const refreshUserBtn = document.getElementById("refreshUser");
refreshUserBtn.addEventListener("click", DisplayNewUser);

DisplayNewUser();

async function DisplayNewUser() {
    if (isBuffering == true) return;
    isBuffering = true;
    const results = await GetJsonUser();
    isBuffering = false;

    img.src = results.picture.large;
    name.innerHTML = `${results.name.title} ${results.name.first} ${results.name.last}`;

    gender.innerHTML = results.gender;
    age.innerHTML = `Age: ${results.dob.age}`;
    email.innerHTML = `Email: ${results.email}`;
    phoneNumber.innerHTML = `Phone Number: ${results.phone}`;
    password.innerHTML = `Password: ${results.login.password}`;
    userName.innerHTML = `Username: ${results.login.username}`;
}
