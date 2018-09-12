/* ========================================================================================
JQuery humanTyping plugin - ES6 version.
Allows you to simulate a human typing a phrase as a placeholder for a form input field.

Developer: Manuel InHertz
Docs & Repo: 
wwww.manuel-inhertz.com

=========================================================================================== */

(function ( $ ) {

    $.fn.humanTyping = function( array ) {
      const el = this;
      
      function toAdd(l) {
        const current = el.attr('placeholder');
        el.attr('placeholder', current + l );
        return new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Print one phrase
      function printPhrase(phrase) {
          return new Promise(resolve => {
              // Clear placeholder before typing next phrase
              el.attr('placeholder', ''); //resets placeholder to 0
            
              let letters = phrase.split('');
              // For each letter in phrase
              letters.reduce(
                  (promise, letter, index) => promise.then(_ => {
                      // Resolve promise when all letters are typed
                      if (index === letters.length - 1) {
                          // Delay before start next phrase "typing"
                          setTimeout(resolve, 1000);
                      }
                      return toAdd(letter);
                  }),
                  Promise.resolve()
              );
          });
      } 
      
      function printPhrases(arr) {
        // For each phrase
        // wait for phrase to be typed
        // before start typing next
        arr.reduce(
          (promise, phrase) => promise.then( _ => printPhrase(phrase)), 
          Promise.resolve()
        );
      }
      
      return printPhrases(array);
      
    };

  }( jQuery ));