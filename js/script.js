//mobile menu
const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const modal = document.querySelector(".modal");
const addCart = document.querySelector(".shopping-cart");
const addLike = document.querySelectorAll(".like");
const modalContent = document.querySelector(".modal-content");

menuBtn.addEventListener("click", function(e) {
  console.log("menuBtn");
  mobileMenu.classList.toggle("hide");
});

addLike.forEach(addBtn => {
  addBtn.addEventListener("click", function(e) {
    console.log("addLike");
    modalContent.textContent = "已加入我的收藏";
    modal.style.display = "block";
  });
});

addCart.addEventListener("click", function(e) {
  console.log("addLike");
  modalContent.textContent = "已加入購物車";
  modal.style.display = "block";
});

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
