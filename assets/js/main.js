// disabled right click
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);


function slider(img) {
  document.querySelector(".hero-img img").src = img;
}

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};