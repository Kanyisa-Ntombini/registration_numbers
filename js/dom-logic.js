let aRegNum = AddingRegNumbers();

//PAGE REFRESHES
aRegNum.checkStorageList();
if (aRegNum.checkKeyTown()) {
    aRegNum.refreshPrint();
}

/* === ADD BUTTON === */ 
const addBtn = document.querySelector('.addBtn');
function addRegNum() {
    //HTML ELEMENTS
    let regNum = document.querySelector('.regNum').value;
    let errorMessageNumPlate = document.querySelector('.error-numplate');

    //Get Number plate
    aRegNum.setRegNum(regNum);

    //Add entered registration number to the list
    aRegNum.addToList();

    //Print number plate
    if (regNum <= 0) {
        errorMessageNumPlate.innerHTML = aRegNum.getNumberPlateError();
    } else if (aRegNum.checkDuplicate()) {
        errorMessageNumPlate.innerHTML = aRegNum.getDuplicateError();
    } 
    
    if (regNum>0 && !aRegNum.checkDuplicate()) {
        let gettingRegNum = aRegNum.getRegNum();
        document.body.onload = aRegNum.createElement(gettingRegNum);
    }

    //Add number plate to list in local storage
    let theUpdateStorageList = aRegNum.getUpdatedRegList();
    localStorage.keyList = JSON.stringify(theUpdateStorageList);

    //CLEAR INPUT TEXT
    let regNum2 = document.querySelector('.regNum');
    regNum2.value = '';

    //clear error message
    let errorMessageNumPlate2 = document.querySelector('.error-numplate');
    setTimeout(function(){ errorMessageNumPlate2.innerHTML = '' }, 5000);
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
    
    //CHOOSE TOWN
    let chosenTown = document.getElementById('accessingDropDown').value;
    localStorage.setItem('keyTown', chosenTown);
    
    //PRINTING
    if (chosenTown == 'ALL') {
        for (let i=0; i<updatedListStorage.length; i++) {
            let listItem1 = updatedListStorage[i];
            document.body.onload = aRegNum.createElement(listItem1);
        }
    } else {
        for (let i=0; i<updatedListStorage.length; i++) {
            let listItem = updatedListStorage[i];
    
            if (listItem.startsWith(chosenTown)) {
                document.body.onload = aRegNum.createElement(listItem);
            }
        }
    }
}

/* === RESET BUTTON === */
const resetBtn = document.querySelector('.reset');
function resetEverything() {
    //SHOWS SELECT ALL OPTION
    let dropDownItems = document.querySelector('.dropDownContent');
    dropDownItems[0].selected = true;

    localStorage.clear();

    //CLEAR NUMBER PLATES
    let node = document.querySelectorAll('.num-plate');
    for (let j=0; j<node.length; j++) {
        if (node[j].parentNode) {
            node[j].parentNode.removeChild(node[j]);
        }; 
    }
}
resetBtn.addEventListener('click', resetEverything);