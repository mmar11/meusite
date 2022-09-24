'use strict'

//filter on the projects7

let project1 = document.querySelector("#project1");
let project2 = document.querySelector("#project2");
let project3 = document.querySelector("#project3");

let hidden1 = document.getElementById('hidden1');
let hidden2 = document.getElementById('hidden2');
let hidden3 = document.getElementById('hidden3');

project1.addEventListener('mouseover', function () {
    show(hidden1)
});
project2.addEventListener('mouseover', function () {
    show(hidden2)
});
project3.addEventListener('mouseover', function () {
    show(hidden3)
});

project1.addEventListener('mouseout', function () {
    hide(hidden1)
});
project2.addEventListener('mouseout', function () {
    hide(hidden2)
});
project3.addEventListener('mouseout', function () {
    hide(hidden3)
});

function show(item) {
    item.removeAttribute('hidden')
};

function hide(item) {
    item.setAttribute("hidden", "hidden")
};


function responsive() {
    var x = document.getElementById("navmenu");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function topnav() {
    var x = document.getElementById("navmenu");
    if (x.className === "responsive") {
        x.className = " topnav";
    } else {
        x.className = "topnav";
    }

}
//contact form message

// incluir no AWS
// Incluir projetos no site com link do projeto no AWS funcionando
// atualizar o linkedin para desenvolvedor




