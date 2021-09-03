/*Функции открытия/закрытия попапа*/
export function togglePopup(popupElement) {
  popupElement.classList.toggle("popup_opened");
}

/*Функция открытия попапа изображения*/

export function openImagePopup() {
  togglePopup(imagePopup);
}