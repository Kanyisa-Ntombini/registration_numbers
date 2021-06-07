function AddingRegNumbers() {
    let theRegNum = '';
    let regNumList = [];
 
    function setRegNum(num) {
        theRegNum = num;
    }

    function addToList () {
        if (theRegNum.length > 0) {
            regNumList.push(theRegNum);
        }
        return regNumList;
    }

    return {
        setRegNum,
        addToList
    }
}