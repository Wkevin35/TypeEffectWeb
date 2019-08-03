var work = ["全端工程師", "程式設計師", "app設計師"];
var index = 0;
var speed = 300;
var className = ".type";
var count = 0;
function type() {
    console.log('type');
    var t = document.querySelector(className);
    var text = work[index].slice(0, count++);
    t.innerHTML = text;

    if (count === work[index].length+1) {
        index++;
        count = 0;
    }

    if (index === work.length) {
        index = 0;
    }
    setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type());