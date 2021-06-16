function AddingRegNumbers() {
    let numberplateError = '';
    let theStorageList = [];
    let theRegNum = '';
    
    function setRegNum(num) {
        theRegNum = num;
    }

    function setRegList (storageList) {
        theStorageList = storageList;
    }

    function addToList() {
        if (theRegNum.length > 0) {
            theStorageList.push(theRegNum);
        } else {
            numberplateError = 'Please enter the registration number';
        }
    }

    function getRegNum() {
        return theRegNum;
    }

    function getUpdatedRegList() {
        return theStorageList;
    }

    function getNumberPlateError() {
        return numberplateError;
    }

    function createElement(item) {
        const newDiv = document.createElement('div');
        const existingDiv = document.querySelector('.randomDiv');
    
        //Storing the parent node in a variable
        let parentDiv = existingDiv.parentNode;
        const enterRegNum = document.createTextNode(item);
        newDiv.appendChild(enterRegNum);
        parentDiv.insertBefore(newDiv, existingDiv);
        newDiv.classList.add('num-plate');
    }

    return {
        setRegNum,
        setRegList,
        addToList,
        getUpdatedRegList,
        getNumberPlateError,
        getRegNum,
        createElement
    }
}
