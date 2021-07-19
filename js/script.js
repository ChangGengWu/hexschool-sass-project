//mobile menu
const menuBtn = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const modal = document.querySelector(".modal");
const addCart = document.querySelector(".shopping-cart");
const addLike = document.querySelectorAll(".like");
const modalContent = document.querySelector(".modal-content");

//下拉式選單
menuBtn.addEventListener("click", function(e) {
  mobileMenu.classList.toggle("hide");
});

//收藏按鈕
addLike.forEach(addBtn => {
  addBtn.addEventListener("click", function(e) {
    modalContent.textContent = "已加入我的收藏";
    modal.style.display = "block";
  });
});

//購物車按鈕
try {
  addCart.addEventListener("click", function(e) {
    modalContent.textContent = "已加入購物車";
    modal.style.display = "block";
  });
} catch {}

//關閉modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
