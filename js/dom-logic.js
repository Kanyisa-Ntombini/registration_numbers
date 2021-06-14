/* === PAGE REFRESHES: DYNAMICALLY ADDING THE NUMBERPLATES IN LOCAL STORAGE
 === */
let getStorageList = [];
//A storage list(full or empty) is retrieved or a new one is created
if (JSON.parse(localStorage.getItem('keyList') === null)) {
    localStorage.setItem('keyList', JSON.stringify([]));
    //console.log(localStorage);
} else {
    getStorageList = JSON.parse(localStorage.getItem('keyList'));
    //console.log(getStorageList);   
    
    if (getStorageList.length > 0) {
        for (let i=0; i<getStorageList.length; i++) {
            let listItem1 = getStorageList[i];
            document.body.onload = createElement();

            function createElement() {
                const newDiv = document.createElement('div');
                const existingDiv = document.querySelector('.randomDiv');

                //Storing the parent node in a variable
                let parentDiv = existingDiv.parentNode;
                const enterRegNum = document.createTextNode(listItem1);
                newDiv.appendChild(enterRegNum);
                parentDiv.insertBefore(newDiv, existingDiv);
                newDiv.classList.add('num-plate');
            }
        }
    }
}


/* === ADD BUTTON === */
const addBtn = document.querySelector('.addBtn');
let aRegNum = AddingRegNumbers();

function addRegNum() {
    //HTML ELEMENTS
    let regNum = document.querySelector('.regNum');
    let numberplate = regNum.value;
    let errorMessageNumPlate = document.querySelector('.error-numplate');

    //Get Number plate
    aRegNum.setRegNum(numberplate);

    //Print number plate
    if (numberplate <= 0) {
        errorMessageNumPlate.innerHTML = aRegNum.getNumberPlateError();
    } else {
        document.body.onload = createElement();
            function createElement() {
                const newDiv = document.createElement('div');
                const existingDiv = document.querySelector('.randomDiv');

                //Storing the parent node in a variable
                let parentDiv = existingDiv.parentNode;
                const enterRegNum = document.createTextNode(aRegNum.getRegNum());
                newDiv.appendChild(enterRegNum);
                parentDiv.insertBefore(newDiv, existingDiv);
                newDiv.classList.add('num-plate');
            }
    }

    //Set the registration list from the localStorage into factory function
    aRegNum.setRegList(getStorageList);

    //Add entered registration number to the list
    aRegNum.addToList();
    
    //Add number plate to list in local storage
    let theUpdateStorageList = aRegNum.getUpdatedRegList();
    localStorage.keyList = JSON.stringify(theUpdateStorageList);

    //CLEAR INPUT TEXT
    let regNum2 = document.querySelector('.regNum');
    regNum2.value = '';

    //clear error message
    let errorMessageNumPlate2 = document.querySelector('.error-numplate');
    setTimeout(function(){ errorMessageNumPlate2.innerHTML = '' }, 3000);
}
addBtn.addEventListener('click', addRegNum);

/* === DROP DOWN BUTTON === */
function clickDropDown() {
    //CLEAR NUMBER PLATES
    let node = document.querySelectorAll('.num-plate');
    for (let j=0; j<node.length; j++) {
        if (node[j].parentNode) {
            node[j].parentNode.removeChild(node[j]);
        }; 
    }

    //get list from localStorage
    let updatedListStorage = JSON.parse(localStorage.getItem('keyList'));
    
    let chosenTown = document.getElementById('accessingDropDown').value;
    localStorage.setItem('keyTown', chosenTown);
    
    //DYNAMICALLY ADDING THE NUMBERPLATES
    for (let i=0; i<updatedListStorage.length; i++) {
        let listItem = updatedListStorage[i];
        let firstLetters = listItem.substr(0,2);

        if (firstLetters === chosenTown) {
            document.body.onload = createElement();
            function createElement() {
                const newDiv = document.createElement('div');
                const existingDiv = document.querySelector('.randomDiv');

                //Storing the parent node in a variable
                let parentDiv = existingDiv.parentNode;
                const enterRegNum = document.createTextNode(listItem);
                newDiv.appendChild(enterRegNum);
                parentDiv.insertBefore(newDiv, existingDiv);
                newDiv.classList.add('num-plate');
            }
        }
    }
}
