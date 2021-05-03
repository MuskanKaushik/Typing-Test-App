var dataModule = (function(){       //object with property value as another object 
    
    var lineReturn = '|';

    //shuffle function
    var shuffle = function(array){
        //[1,2,3] -> [3,1,2]
        //newArray[]
        //select random element : 2
        //newArray[2]
        //oldArray[1,3]
        //select random element: 1
        //newArray[2,1]
        //oldArray[3]
        //select random element: 3
        //newArray[2,1,3]
        //oldArray[]
        var newArray=[];
        var randomIndex;
        var randomElement;
        while(array.length>0){
            //take a random element from the array and add it to newArray
            randomIndex = Math.floor(Math.random()*array.length);
            randomElement = array[randomIndex];
            newArray.push(randomElement);
            //delete randomElement from array
            array.splice(randomIndex,1);
        }
        return newArray;
    };

    //capitalize first letter of a string
    String.prototype.capitalize = function(){
        var newString ='';
        var firstCharCap = this.charAt(0).toUpperCase();
        var remainingChar = this.slice(1);
        newString = firstCharCap + remainingChar;
        return newString;
    };

    //capitalizeRandom function
    //array['word1', 'word2', 'word3']
    //array['Word1', 'word2', 'Word3']
    var capitalizeRandom = function(arrayOfStrings){
        return arrayOfStrings.map(function(currentWord){ 
        var x = Math.floor(4 * Math.random());  //chances of x equal to 3: 25% (percentage of likelihood that the 1st word of string will be capital is 25%)
        return (x==3) ? currentWord.capitalize() : currentWord; 
    })
};


    //addRandomPunctuation function
    //array['word1','word2','word3']
    //array['word1.','word2?','word3,']
    var addRandomPunctuation = function(arrayOfStrings){
        return arrayOfStrings.map(function(currentWord){
            var randomPunctuation;
            var items = [lineReturn, '?', ',', ',', ',', ',', '.', '.', '!', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
            var randomIndex = Math.floor(Math.random() * items.length);
            randomPunctuation = items[randomIndex];
            
            return currentWord + randomPunctuation;
        });
    };

    var appData = {

        indicators: { 
                    testStarted: false,
                    testEnded: false,
                    totalTestTime:0, //It refers to the total time initialize by the client
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
                currentWordIndex: -1, //setting it -1 because we have to incresement the value of current word index by 1 and adding 1 to -1 will to first index i.e. 0
                testWords: [],      //array in which we are going to keep all the words extracted form client
                currentWord: {}
        },               
    };

    //Word Constructor
    var word = function(index){
        //word values: correct vs user's
        this.value = {
            correct: appData.words.testWords[index]+' ',
            user:'',
            isCorrect:false
        }; 
        //character: correct vs user's
        this.characters = {
            correct:this.value.correct.split(''),
            user:[],
            totalCorrect: 0,
            totalTest: this.value.correct.length
        };

    }; //this method will contain the word at every index

    //Update method: update the word using the word typed by the user
    word.prototype.update = function(value){};  //Since the value will be updated for words so we got to update the words.

    return{                             //return object with property as method
        //Indicators - test Control

        //sets the total test time to x
        setTestTime: function(x){
            appData.indicators.totalTestTime = x;
        },  

        //initializes time left to the total test time
        initializeTimeLeft(){
            appData.indicators.timeLeft = appData.indicators.totalTestTime;
        },  

        //starts the test
        startTest: function(){}, 

        //ends the test
        endTest: function(){},  

        //return the remaining test time
        getTimeLeft: function(){
            return appData.indicators.timeLeft;
        }, 

        reduceTime: function(){},  //reduces the time by one sec

        timeLeft: function(){},  //checks if there is time left to continue the test

        testEnded: function(){
            return appData.indicators.testEnded;
        },  //checks if the test has already ended

        testStarted: function(){},  //checks if the test has started

        //Results

        calculateWpm: function(){}, //calculates wpm and wpmChange and updates them in appData

        calculateCpm: function(){}, //calculates cpm and cpmChange and updates them in appData

        calculateAccuracy: function(){}, //calculates accuracy and accuracyChange and updates them in appData
        
        //Test Words

        //fill words.testWords
        fillListOfTestWords: function(textNumber, words){
            var result = words.split(" "); //coverting the string into array of string

            if(textNumber == 0){
                //shuffle words
                result = shuffle(result);

                //capitalise random strings
                result = capitalizeRandom(result);

                //add a random punctuation
                result = addRandomPunctuation(result);

            }
            appData.words.testWords = result; 
        },

        getListofTestWord: function(){
            return appData.words.testWords;
        },  //get the list of test words: words.testWords

        moveToNewWord: function(){
            if(appData.words.currentWordIndex>-1){
                //updating the number of correct words

                //updating the number of correct characters

                //update number of test characters

            }
             appData.words.currentWordIndex ++;
             var currentIndex = appData.words.currentWordIndex;
             var newWord = new word(currentIndex); //new instance of the class word
            appData.words.currentWord = newWord; //storing the instance into current word
        },  //increments the currentWordIndex - updates the current word (appData.words.currentWord) by creating a new 
                                        //instanse of word class - updates numOfCorrectWords, numOfCorrectCharacters and numOfTestCharacters.

        
        getCurrentWordIndex(){
            return appData.words.currentWordIndex;
        },

        //get current word
        getCurrentWord(){
            var currentWord = appData.words.currentWord;
            return{ //This is for the formatting purpose of the current word
                value:{
                    correct: currentWord.value.correct,
                user: currentWord.value.user
            }
        };
    },

        updateCurrentWord: function(value){
            appData.words.currentWord.update(value);
        },  //updates current word using user input 

        getLineReturn(){
            return lineReturn;
        },

        returnData(){
            console.log(appData);
        }
    }

})();