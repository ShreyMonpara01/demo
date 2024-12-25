
let users =JSON.parse(localStorage.getItem("users")) || []
const handleData = (e) => {
     e.preventDefault();

     let user = {
          email: getValue("#Email"),
          password: getValue("#Password")
     };
     let isMatched = userfilter(
          (elee) => Email == user.Email && elee.password == user.password);
     console.log(isMatched);
};