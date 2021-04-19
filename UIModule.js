var UIModule = (function(){

    //classes used to select HTML elements
    //var DOMElements = {

        //indicators - test control
       /* timeLeft,  //HTML elememt displaying time Left

        //test results
        wpm, wpmChange, cpm, cpmChange, accuracy, accuracyChange,

        //user input
        textInput, nameInput,

        //test words
        content, activeWord,

        //model
        modal
    };*/

    return{

        //get DOM elements
        getDOMElements: function(){},

        //Indicators - Test Control
        updateTimeLeft: function(){},

        //results
        updateResults: function(){},

        fillModel: function(){},

        showModel: function(){},

        //user input
        inputFocus: function(){},

        isNameEmpty: function(){},

        flagNameInput: function(){},

        spacePressed: function(){},

        enterPressed: function(){},

        emptyInput: function(){},

        getTypedWord: function(){},

        //test Words
        fillContent: function(){},

        formatWord: function(wordObject, wordHTML){},

        setActiveWord: function(index){},

        deactivateCurrentWord: function(){},

        scroll: function(){}
    }

})();
