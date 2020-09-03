var sizeSelect = document.querySelectorAll(".size-select");
var modalPopup = document.querySelector(".modal-popup");
var sizeInput = modalPopup.querySelector(".modal-popup__size-input");
var overlay = document.querySelector(".modal-popup__overlay");

for (var i = 0; i < sizeSelect.length; i++) {
  // var modalPopup = sizeSelect[i];
  // console.log(modalPopup);
  sizeSelect[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-popup--show");
    sizeInput.focus();
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-popup--show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-popup--show");
    }
  }
});

overlay.addEventListener("click", function () {
  modalPopup.classList.remove("modal-popup--show");
});
