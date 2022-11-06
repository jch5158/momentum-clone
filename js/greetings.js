const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const nameQuery = document.querySelector("#name-query");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(eventInfo) {
  eventInfo.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  nameQuery.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#clock").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#todo-form").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#todo-list").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#quote").classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#todo-text").classList.remove(HIDDEN_CLASSNAME);
  nameQuery.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
