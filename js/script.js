"use strict";

//Скрипт для меню
const btn = document.querySelector("#menu_ori_phone");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("disp");
});

//Скрипт для якорей
const anchors = document.querySelectorAll('a[href*="#menu_"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

//Скрипт для кнопки в меню
const card1 = document.querySelector("#card_1");
const card2 = document.querySelector("#card_2");
const card3 = document.querySelector("#card_3");

card1.addEventListener("click", (event) => {
    card1.innerHTML = "У КОРЗИНІ";
});

card2.addEventListener("click", () => {
    card2.innerHTML = "У КОРЗИНІ";
});

card3.addEventListener("click", () => {
    card3.innerHTML = "У КОРЗИНІ";
});



