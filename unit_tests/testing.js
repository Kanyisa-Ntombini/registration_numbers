describe('Testing function:',
    function() {
        it('should check that Mocha works' , function(){
            assert.equal(2,2);
    
            assert.deepEqual([2,2],[2,2]);
        });
    }
);

describe('Greetings function:' , 
    function() {
        //

        //should check registration number is received 
        it('should check of registration number is received' , function(){
            let testing = AddingRegNumbers();
            testing.setRegNum('CA 2222');
            assert.deepEqual('hey', testing.getRegNum());
        });
        
        //should check if a number is entered

        //should check if a language was selected
        

        //it ('should check if a greeting is made', 
    
        //Test for counter
        
    }
);