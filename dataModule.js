var dataModule = (function(){       //object with property value as another object 
    
    //shuffle function

    //capitalizeRandom function

    //addRandomPunctuation function

    var appData = {

        indicators: { 
                    testStarted: false,
                    testEnded: false,
                    totalTestTime:0,
                    timeLeft:0          
        },
        results: {
                wpm: 0,
                wpmChange: 0,
                cpm: 0,
                cpmChange: 0,
                accuracy: 0,
                accuracyChange: 0,
                numOfCorrectWords: 0,
                numOfCorrectCharacters: 0,
                numOfTestCharacters: 0
        },
        words: {
                currentWordIndex: 0,
                testWords: [],      //array in which we are going to keep all the words extracted form client
                currentWord: {}
        },               
    };

    //Word Constructor
    var word = function(index){}; //this method will contain the word at every index

    //Update method
    word.prototype.update = function(value){};  //Since the value will be updated for words so we got to update the words.

    return{                             //return object with property as method
        //Indicators - test Control

        setTimeTest: function(x){},  //sets the total test time

        initializeTimeLeft(){},  //initializes time left to the total test time

        startTest: function(){}, //starts the test

        endTest: function(){},  //ends the test

        getTimeLeft: function(){},  //return the remaining test time

        reduceTime: function(){},  //reduces the time by one sec

        timeLeft: function(){},  //checks if there is time left to continue the test

        testEnded: function(){},  //checks if the test has already ended

        testStarted: function(){},  //checks if the test has started

        //Results

        calculateWpm: function(){}, //calculates wpm and wpmChange and updates them in appData

        calculateCpm: function(){}, //calculates cpm and cpmChange and updates them in appData

        calculateAccuracy: function(){}, //calculates accuracy and accuracyChange and updates them in appData
        
        //Test Words

        //fill words.testWords
        fillListOfTestWords: function(textNumber, words){
            var results  = words.split(" "); //coverting the string into array of string

            if(textNumber == 0){
                //shuffle words

                //capitalise random strings

                //add a random punctuation

            }

            appData.words.testWords = results; 

        },

        getListofTestWord(){},  //get the list of test words: words.testWords

        moveToNewWord: function(){},  //increments the currentWordIndex - updates the current word (appData.words.currentWord) by creating a new 
                                        //instanse of word class - updates numOfCorrectWords, numOfCorrectCharacters and numOfTestCharacters.

        updateCurrentWord: function(value){},  //updates current word using user input 

    }

})();