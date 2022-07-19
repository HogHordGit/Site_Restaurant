"use strict";

const btn = document.querySelector("#menu_ori_phone");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("disp");
});