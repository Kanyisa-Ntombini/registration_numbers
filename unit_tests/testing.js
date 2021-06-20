describe('Testing function:',
    function() {
        it('should check that Mocha works' , function(){
            assert.equal(2,2);
    
            assert.deepEqual([2,2],[2,2]);
        });
    }
);

describe('Greetings function: Checking when a page refreshes' , 
    function() {
        it ('should check if a new list is created in an empty localStorage', function(){
            localStorage.clear();
            let testing = AddingRegNumbers();
            testing.checkStorageList();

            assert.deepEqual('[]', localStorage.getItem('keyList'));
        });

        it('should check if keyTown exists', function() {
            let testing = AddingRegNumbers();
            testing.checkStorageList();
            localStorage.setItem('keyTown', 'CA');

            assert.deepEqual(true, testing.checkKeyTown());
        });
    }
);


describe('Greetings function: Checking when a registration number is entered' , 
    function() {
        it ('should check if the right registration number is stored', function(){
            let testing1 = AddingRegNumbers();
            testing1.setRegNum('');
            assert.deepEqual('', testing1.getRegNum());

            let testing2 = AddingRegNumbers();
            testing2.setRegNum('ca 5555');
            assert.deepEqual('CA 5555', testing2.getRegNum());
        });

        it('should get the updated list', function() {
            let testing = AddingRegNumbers();
            testing.setRegNum('CL 4444');
            testing.addToList();

            assert.deepEqual(true, testing.getUpdatedRegList());
        });



        //should check registration number is received 
        /*it('should check of registration number is received' , function(){
            let testing = AddingRegNumbers();
            testing.setRegNum('CA 2222');
            assert.deepEqual('hey', testing.getRegNum());
        });*/
        
        //should check if a number is entered

        //should check if a language was selected
        

        //it ('should check if a greeting is made', 
    
        //Test for counter
        
    }
);