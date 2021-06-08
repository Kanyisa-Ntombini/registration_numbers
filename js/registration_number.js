function AddingRegNumbers() {
    let theRegistrationList = [];
    let theRegNum = '';
    
    function setRegNum(num) {
        theRegNum = num;
    }

    function setRegList (registrationList) {
        theRegistrationList = registrationList;
    }

    function addToList() {
        if (theRegNum.length > 0) {
            theRegistrationList.push(theRegNum);
        }
    }

    function getUpdatedRegList() {
        return theRegistrationList;
    }

    return {
        setRegNum,
        setRegList,
        addToList,
        getUpdatedRegList
    }
}