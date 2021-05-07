var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){

        // enter click event
        uModule.getDOMElements().textInput.addEventListener('keydown',function(event){
            
            //if the test ended, do nothing
            if(dModule.testEnded()){
                return;
            }

            //check if the user press enter
            var key = event.keyCode;
            if(key ==13){
                uModule.getDOMElements().textInput.value += dModule.getLineReturn() + ' ';
            }

            //create an new 'input' event
            var inputEvent = new Event('input');

            //dispatch it
            uModule.getDOMElements().textInput.dispatchEvent(inputEvent);
        });
        
        //character tying event listener
        uModule.getDOMElements().textInput.addEventListener('input',function(event){
            //if the test ended
            if(dModule.testEnded()){
                return;
            }

            //if the test has not started yet, start the test and countdown
            if(!dModule.testStarted()){
                //start the test: data module
                dModule.startTest()

                //start counter
                var b = setInterval(function(){
                    //calculate the results: data module

                        //update the wpm, wpmChange : data module

                        //update the cpm, cpmChange: data module

                        //update accuracy, accuracyChange: data module

                    //update the results : UI module

                    //update time left

                    //check if we have time left

                        //yes: 

                        //reduce time by one sec

                        //update time remaining in UI module

                        //no:

                        //end the test : data module

                        //fill the modal

                        //show modal


                }, 1000);

            }

            //get typed word: UI module
            var typedWord = uModule.getTypedWord();

            //update the current word: data module
            dModule.updateCurrentWord(typedWord);

            //format the active word
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);



            //check if the user pressed space or enter
            if(uModule.spacePressed(event) || uModule.enterPressed(dModule.getLineReturn())){
                //console.log('Space pressed');
                //empty the text input
                uModule.emptyInput();

                //deactivate current word
                uModule.deactivateCurrentWord();

                //move to a new word: data Module
                dModule.moveToNewWord();

                //set active word: UI Module
                var index = dModule.getCurrentWordIndex(); //we have to know the current word index to set the correct active word
                uModule.setActiveWord(index);

                //format the active word: UI Module
                var currentWord = dModule.getCurrentWord();
                uModule.formatWord(currentWord);

                //Scroll the word into middle view
                //now we just keep pressing the space then there will be situation where we will be unable to find the next word therefore we are put a scroll function
                uModule.scroll();

            }
        });
        //click on download button event listeners

        //click on restart button event listeners
    };
    //scroll to middle view on window resize
    window.addEventListener('resize', uModule.scroll);

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