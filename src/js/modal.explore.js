// Отримуємо кнопку підписки та модальне вікно
var subscribeBtn = document.getElementById("subscribe-btn");
var modal = document.getElementById("modal");

// Отримуємо кнопки закриття модального вікна та кнопку submit форми
var closeBtn = document.getElementById("close-btn");
var submitBtn = document.getElementById("submit-btn");

// Коли користувач натискає кнопку підписки, відкриваємо модальне вікно
subscribeBtn.onclick = function() {
  modal.style.display = "block";
}

// Коли користувач натискає кнопку закриття, закриваємо модальне вікно
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Коли користувач успішно підписується, закриваємо модальне вікно
submitBtn.onclick = function() {
  modal.style.display = "none";
}

// Коли користувач натискає поза модальним вікном, закриваємо його
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
