let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function isEmailAddress(str) {
  return pattern.test(str);
}
document.forms["form1"].addEventListener("submit", (e) => {
  let usernameInput = document.getElementById("username");
  // let x = document.forms["myForm"]["username"].value;
  let x = usernameInput.value;
  if (parseInt.x < 5) {
    e.preventDefault();
    alert("Username must contain a minimum of 5 characters");
    return false;
  }
  console.log("Submitted");
});
