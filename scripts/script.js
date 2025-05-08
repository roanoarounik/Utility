let yearElement = document.querySelector(`.yearElement`);
if (yearElement) {
    yearElement.innerHTML = new Date().getFullYear();
}