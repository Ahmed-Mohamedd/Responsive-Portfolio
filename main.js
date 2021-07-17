let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let topbar = document.querySelector('.topbar');
let toggle = document.querySelector('.toggle');

$(document).ready(function () {
    $(toggle).click(function(){
        $(navigation).toggleClass('active');
        $(main).toggleClass('active');
        $(topbar).toggleClass('active');
        $(toggle).toggleClass('active');
    })




})