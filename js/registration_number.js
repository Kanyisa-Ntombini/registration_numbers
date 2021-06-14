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

    return {
        setRegNum,
        setRegList,
        addToList,
        getUpdatedRegList,
        getNumberPlateError,
        getRegNum
    }
}
