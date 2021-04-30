var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){
        
        //character tying event listener

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

            //set active word: UI Module

            //format the active word: UI Module

            //focus on text input: UI Module

            //add event listeners
            addEventListeners();
        }
    };
})(dataModule, UIModule, certificateModule, wordsModule);