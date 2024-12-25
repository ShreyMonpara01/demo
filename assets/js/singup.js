import { getValue } from "../componets/helper.js";


let users =JSON.parse(localStorage.getItem("users")) || []
const handleData=(e)=>{
     
     e.preventDefault();
     console.log("Start");
     let user={
          // YourName:getValue(".username"),
          // YourEmail:getValue(".email"),
          // password:getValue(".password"),  
          // confirmPassword:getValue(".confirmPassword"),
          // Repeatyourpassword:getValue(".repeatyourpassword"),
          username:document.getElementById("username").value,
          email:document.getElementById("email").value,
          password:document.getElementById("password").value,  
          confirmPassword:document.getElementById("confirmPassword").value,
          // repeatPassword:document.getElementById("repeatPassword").value,    
  
     }
     console.log(user);
};

document.getElementById("signupForm").addEventListener("submit",handleData)
