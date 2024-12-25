count = localStorage.getItem("count") || 0;
document.querySelector("#like").innerHTML = `${count} Likes`;
const handleLikes = () =>{
    count++;
    document.querySelector("#like").innerHTML = `${count} Likes`;
    let icon = document.querySelector(".like")
    icon.style.color = "red"
    icon.classList.remove("fa-regular")
    icon.classList.add("fa-solid")
    localStorage.setItem("count", count)
}
document.querySelector(".like").addEventListener("click",handleLikes) 