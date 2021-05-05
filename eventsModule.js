var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){
        
        //character tying event listener
        uModule.getDOMElements().textInput.addEventListener('input',function(event){
            //if the test ended
            if(dModule.testEnded()){
                return;
            }

            //if the test has not started yet, start the test and countdown
            if(dModule.testStarted()){
                //start the test

            }

            //get typed word: UI module
            var typedWord = uModule.getTypedWord();

            //update the current word: data module
            dModule.updateCurrentWord(typedWord);

            //format the active word

            //check if the user pressed space or enter
            if(uModule.spacePressed() || uModule.enterPressed()){
                
                //empty the text input

                //deactivate current word

                //move to new word: data module

                //set the active word: UI Module

                //format the active word: UI Module

                //Scroll theword into middle view

            }
        });
        //click on download button event listeners

        //click on restart button event listeners
    };

    return{

        //init function, initializes the test before
        init: function(duration, textNumber){

            //fill the list of test words: data Module

            var words = wModule.getWords(textNumber); //taking the textNumber from the word Module(either list 0,1 or 2)
            dModule.fillListOfTestWords(textNumber,words); // calling the data Module and passing parameter textNumber and words (sending words because we can randomize words)

            //fill the list of test words: UI Module
            var lineReturn = dModule.getLineReturn();
            var testWords = dModule.getListofTestWord();
            uModule.fillContent(testWords, lineReturn);

            //set the total test time
            dModule.setTestTime(duration);

            //update time left: data Module
            dModule.initializeTimeLeft();

            //update time left: UI Module
            var timeLeft = dModule.getTimeLeft();
            uModule.updateTimeLeft(timeLeft);

            //move to a new word: data Module
            dModule.moveToNewWord();

            //set active word: UI Module
            var index = dModule.getCurrentWordIndex(); //we have to know the current word index to set the correct active word
            uModule.setActiveWord(index);

            //format the active word: UI Module
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);

            //focus on text input: UI Module
            uModule.inputFocus();

            //add event listeners
            addEventListeners();
        }
    };
})(dataModule, UIModule, certificateModule, wordsModule);