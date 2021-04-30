var UIModule = (function(){

    //classes used to select HTML elements
    var DOMElements = {

        //indicators - test control
        timeLeft:'',  //HTML elememt displaying time Left

        //test results
        wpm:'', wpmChange:'',
        cpm:'', cpmChange:'', 
        accuracy:'', accuracyChange:'',

        //user input
        textInput:'', 
        nameInput:'',

        //test words
        content:document.getElementById('content'),
        activeWord:'',

        //model
        modal:''
    };
    var splitArray = function(string){
        return string.split('');
    };

    var addSpace = function(array){
        array.push(' ')
        return array;
    };

    var addSpanTags = function(array){
        return array.map(function(currentCharacter){
            return '<span>' + currentCharacter + '</span>';
        });
    };

    var addWordSpanTags = function(array){
        array.push('</span');
        array.unshift('<span>');
        return array;
    };

    var joinEachWord = function(array){
        return array.join('');
    };

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
        fillContent: function(array, lineReturn){
        
            //['word1,','word2']
            var content = array.map(splitArray);
            console.log(content);

            //[['w','o','r','d','1',','],['w','o','r','d','2']]
            content = content.map(addSpace);
            console.log(content);

            //[['w','o','r','d','1',',',' '],['w','o','r','d','2',' ']]

            content = content.map(addSpanTags);
            console.log(content);
            //[['<span>w</span>','<span>o</span>','<span>r</span>','<span>d</span>','<span>1</span>','<span>,</span>','<span> </span>'],['<span>w</span>','<span>o</span>','<span>r</span>','<span>d</span>','<span>2</span>','<span> </span>']]

            content = content.map(addWordSpanTags);
            console.log(content);
            //[[<span>'<span>w</span>','<span>o</span>','<span>r</span>','<span>d</span>','<span>1</span>','<span>,</span>','<span> </span>'</span>],[<span>'<span>w</span>','<span>o</span>','<span>r</span>','<span>d</span>','<span>2</span>','<span> </span>'</span>]]

            content = content.map(joinEachWord);
            console.log(content);
            //<span><span>w</span><span>o</span><span>r</span><span>d</span><span>1</span><span>,</span><span> </span>
            //<span>w</span><span>o</span><span>r</span><span>d</span><span>2</span><span> </span>
            content = content.join('');
            console.log(content);

            //Replace the line return special code with a html entity (line return)
            
            //<span>|</span>
            //<span>&crarr;</span>
            //content = content.replace('<span>|</span>','<span>&crarr;</span'); -->>> //It will replace only the first occurance of the vertical line into line return
            
            //The solution to replace all the vertical lines is by using split and join
            //By split javascript will search for this separator and will return the array without this separator and join will actually take the place of the separator.
            content = content.split('<span>'+ lineReturn + '</span>').join('<span>&crarr;</span>');

            //fill content
            DOMElements.content.innerHTML = content;
        },

        formatWord: function(wordObject, wordHTML){},

        setActiveWord: function(index){},

        deactivateCurrentWord: function(){},

        scroll: function(){}
    }

})();
