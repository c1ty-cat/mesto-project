// Переменные
const editButton = document.querySelector(".button_type_edit");
const addButton = document.querySelector(".button_type_add");
const authorCloseButton = document.querySelector(".button_type_author");
const placeCloseButton = document.querySelector(".button_type_place");
const imageCloseButton = document.querySelector(".button_type_image");
const authorPopup = document.querySelector(".popup_type_author");
const cardPopup = document.querySelector(".popup_type_card");
const imagePopup = document.querySelector(".popup_type_image");
const popupList = document.querySelectorAll(".popup");

/*Функции открытия/закрытия попапа*/
function togglePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
}

/*Функция открытия попапа изображения*/

function openImagePopup() {
  togglePopup(imagePopup);
}

/*Вешаем обработчики на кнопки попапов*/
imageCloseButton.addEventListener("click", function () {
  togglePopup(imagePopup);
});

editButton.addEventListener("click", function () {
  togglePopup(authorPopup);
});

authorCloseButton.addEventListener("click", function () {
  togglePopup(authorPopup);
});

addButton.addEventListener("click", function () {
  togglePopup(cardPopup);
});

placeCloseButton.addEventListener("click", function () {
  togglePopup(cardPopup);
});

//Submit
// Находим форму в DOM
const formElement = authorPopup.querySelector(".popup__form");
// Находим поля формы в DOM
const authorNameInput = formElement.elements.userName;
const jobInput = formElement.elements.userJob;

// Обработчик «отправки» формы
function authorFormSubmitHandler(evt) {
  evt.preventDefault();

  let profileName = document.querySelector(".profile__name");
  let jobName = document.querySelector(".profile__description");

  profileName.textContent = authorNameInput.value;
  jobName.textContent = jobInput.value;
  formElement.reset()
  enableValidation();
  togglePopup(authorPopup);
}

formElement.addEventListener("submit", authorFormSubmitHandler);

/*Слушатели закрытия попапа на оверлее*/
popupList.forEach(element => element.addEventListener("click", evt => {
  if (evt.target.classList.contains("popup_opened")) {
    evt.target.classList.remove("popup_opened");
  }
}));

/*Слушатель закрытия попапа при нажатии esc */
document.addEventListener("keydown", function(evt) {
  if(evt.key === "Escape") {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
  }
});

