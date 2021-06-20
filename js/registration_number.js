function AddingRegNumbers() {
    let numberplateError = '';
    let theStorageList;
    let theRegNum = '';
    let getStorageKey = localStorage.getItem('keyList');
    let getTownKey = '';

    //REFRESHING PAGE
    function checkStorageList()  {
        if (getStorageKey === null) {
            localStorage.setItem('keyList', JSON.stringify([]));
        } else {
            theStorageList = JSON.parse(localStorage.getItem('keyList'));
        }
    }

    function checkKeyTown() {
        getTownKey = localStorage.getItem('keyTown');
        return getStorageKey !==null && getTownKey !== null;
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

    function printRefreshList() {
        for (let i=0; i<theStorageList; i++) {
            let listItem = theStorageList[i];

            if (listItem.startsWith(getTownKey)) {
                document.body.onload = aRegNum.createElement(listItem);
            }
        }
    }

    //ADDING A NEW REGISTRATION NUMBER
    function setRegNum(num) {
        theRegNum = num.toUpperCase();
    }

    function getRegNum() {
        return theRegNum;
    }

    function addToList() {
        if (theRegNum.length > 0) {
            theStorageList.push(theRegNum);
        } else {
            numberplateError = 'Please enter the registration number';
        }
    }

    function getUpdatedRegList() {
        return theStorageList;
    }

    function getNumberPlateError() {
        return numberplateError;
    }

    return {
        checkStorageList,
        checkKeyTown,
        printRefreshList,
        setRegNum,
        addToList,
        getUpdatedRegList,
        getNumberPlateError,
        getRegNum,
        createElement
    }
}
