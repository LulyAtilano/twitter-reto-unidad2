// Variables globales
var enterTweet = document.getElementById('enterTweet');

enterTweet.addEventListener('click', function() {
    // Contenido que esta en el textarea
    var firstTweet = document.getElementById('insertTweet').value;
    document.getElementById('insertTweet').value = ' '; // para hacer que se borre el textarea una vez guardado
    
    var container = document.getElementById('containerTweet');

    var saveTweet = document.createElement('p');
    saveTweet.id = "newTweet";
    var insertTweet = document.createTextNode(firstTweet);
    
    // Se crea el número que dirá la cantidad de caracteres restantes
    var number = document.createElement('span');
    var printNumber = document.createTextNode(number);
    var sectionTweet = document.getElementById('textTweet');

    // Anidar elementos para que aparezca el tweet en la sección Container Tweet
    sectionTweet.appendChild(printNumber);
    saveTweet.appendChild(insertTweet);
    container.appendChild(saveTweet);

    // Versión 2 -> Si no hay texto deshabilitar el gotón de tweet
    if (insertTweet == null ) {
        enterTweet.disabled = true; 
    }
        enterTweet.disabled = false; 
    
    var textOfTweet = document.getElementById('newTweet').firstChild;
    
    for ( var i = 140 ; i < textOfTweet.length; i--) {
        console.log(i);
        console.log(textOfTweet);
    }
});

