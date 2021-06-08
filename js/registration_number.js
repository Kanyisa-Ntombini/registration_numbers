function AddingRegNumbers() {
    let theStorageList = [];
    let theRegNum = '';
    
    function setRegNum(num) {
        theRegNum = num;
        //return theRegNum;
    }

    function setRegList (storageList) {
        theStorageList = storageList;
        //return theStorageList;
    }

    function addToList() {
        if (theRegNum.length > 0) {
            theStorageList.push(theRegNum);
        }
        //return theStorageList;
    }

    function getUpdatedRegList() {
        return theStorageList;
    }

    return {
        setRegNum,
        setRegList,
        addToList,
        getUpdatedRegList
    }
}