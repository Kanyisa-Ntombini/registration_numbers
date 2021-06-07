const addBtn = document.querySelector('.addBtn');
let aRegNum = AddingRegNumbers();

function addRegNum() {
    //HTML ELEMENTS
    let regNum = document.querySelector('.regNum').value;
    let numPlate = document.querySelector('.num-plate');

    aRegNum.setRegNum(regNum);
    aRegNum.addToList();

    //DYNAMICALLY ADDING THE NUMBERPLATES
    document.body.onload = createElement();
    function createElement() {
        const newDiv = document.createElement('div');
        const existingDiv = document.querySelector('.randomDiv');

        //Storing the parent node in a variable
        let parentDiv = existingDiv.parentNode;

        const enterRegNum = document.createTextNode(regNum);
        newDiv.appendChild(enterRegNum);

        parentDiv.insertBefore(newDiv, existingDiv);

        newDiv.classList.add('num-plate');
    }
}

addBtn.addEventListener('click', addRegNum);