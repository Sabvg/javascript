var catOne = document.getElementById('cat-1');
var catTwo = document.getElementById('cat-2');
var catThree = document.getElementById('cat-3');
var catFour = document.getElementById('cat-4');
var catFive = document.getElementById('cat-5');


function color(id) {

    for (i = id; i > 0; i--) {
        document.getElementById('cat-' + i).classList.add('color');
        //console.log('cat-' + i);
    }

    for (i = id + 1; i <= 5; i++) {
        document.getElementById('cat-' + i).classList.remove('color');
        //console.log('cat-' + i);
    }
}


catOne.onclick = function() {
    color(1);
};
catTwo.onclick = function() {
    color(2);
};
catThree.onclick = function() {
    color(3);
};
catFour.onclick = function() {
    color(4);
};
catFive.onclick = function() {
    color(5);
};


document.addEventListener('click', (e) => {
    let iconCat = document.getElementById('cats');
    let targetElement = e.target;

    if (!iconCat.contains(targetElement)) {
        color(0);
    }
});