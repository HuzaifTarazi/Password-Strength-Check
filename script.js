let loginBtn = document.getElementById("loginBtn");

function validateLogin() {
  let userName = document.getElementById("userName").value.trim();
  let passWord = document.getElementById("passWord").value.trim();
  let loginPrint = document.getElementById("loginPrint");

  if (
    !userName ||
    userName.includes(" ") ||
    !passWord ||
    passWord.includes(" ")
  ) {
    alert("Please Fill the Input Feild to Proceed!!");    
    return;
  } else if (passWord.length < 8) {
    loginPrint.textContent = `password can't be lower then 8`;
    console.log("password can't be lower then 8");
    return;
  }

  let hasUpperCase = false;
  let hasNumber = false;
  for (let i = 0; i < passWord.length; i++) {
    let pass = passWord.charAt(i);
    if (pass >= "A" && pass <= "Z") {
      hasUpperCase = true;
    }
    if (pass >= "0" && pass <= "9") {
      hasNumber = true;
    }
  }

  if (!hasUpperCase) {
    loginPrint.textContent = `Add at Leaset One Upper Case Letter in Password!`
    console.log("add one uppercase letter");
  } else if (!hasNumber) {
    loginPrint.textContent = `Add At Least One Number in Your Password!`
    console.log("add at least one number");
  } else if (!(passWord.includes("@") || passWord.includes("#"))) {
    loginPrint.textContent = `Must Include @ or # in Your Password`;
    console.log(" add @ or #");
  } else {
    loginPrint.textContent = `Congrats! Your Password: '${passWord}' is Strong!`
    console.log("strong pass");
  }

  console.log("Username:", userName);
  console.log("Password:", passWord);
}
loginBtn.onclick = validateLogin;

let resetBtn = document.getElementById("resetBtn");

function ResetFunction() {
  let userName = document.getElementById("userName");
  let passWord = document.getElementById("passWord");
  let loginPrint = document.getElementById("loginPrint");
  userName.value = "";
  passWord.value = "";
  loginPrint.textContent = `Feilds Cleared...`;
}
resetBtn.onclick = ResetFunction;
