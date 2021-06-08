const addBtn = document.querySelector('.addBtn');
let aRegNum = AddingRegNumbers();

let getStorageList;
//A storage list(full or empty) is retrieved or a new one is created
if (JSON.parse(localStorage.getItem('keyList') === null)) {
    localStorage.setItem('keyList', JSON.stringify([]));
    console.log(localStorage);
} else {
    getStorageList = JSON.parse(localStorage.getItem('keyList'));
    console.log(getStorageList);
}

getStorageList.push('apple');
localStorage.keyList = getStorageList;
console.log(localStorage);

/*
function addRegNum() {
    //HTML ELEMENTS
    let regNum = document.querySelector('.regNum');
    let numberplate = regNum.value;

    //Get Number plate
    aRegNum.setRegNum(numberplate);

    //Set the registration list into factory function
    aRegNum.setRegList(registrationList);

    //Add entered registration number to the list
    aRegNum.addToList();

    //get registration list
    console.log(aRegNum.getUpdatedRegList());

    /*
    //Add number plate to list in local storage
    localStorage.keyForRegNumbers = JSON.stringify(aRegNum.getUpdatedRegList);

    //print new list
    let printList = JSON.parse(localStorage.getItem('keyForRegNumbers'));
    console.log(printList);
    */
    
    //DYNAMICALLY ADDING THE NUMBERPLATES
    /*document.body.onload = createElement();
    function createElement() {
        const newDiv = document.createElement('div');
        const existingDiv = document.querySelector('.randomDiv');

        //Storing the parent node in a variable
        let parentDiv = existingDiv.parentNode;
        const enterRegNum = document.createTextNode(numberplate);
        newDiv.appendChild(enterRegNum);
        parentDiv.insertBefore(newDiv, existingDiv);
        newDiv.classList.add('num-plate');
    }

    //CLEAR INPUT TEXT
    let regNum2 = document.querySelector('.regNum');
    regNum2.value = '';
}

addBtn.addEventListener('click', addRegNum);*/