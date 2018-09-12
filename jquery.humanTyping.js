/* ========================================================================================
JQuery humanTyping plugin.
Allows you to simulate a human typing a phrase as a placeholder for a form input field.

Developer: Manuel InHertz
Docs & Repo: https://github.com/manuel-inhertz/jquery.humanTyping
wwww.manuel-inhertz.com

=========================================================================================== */

'use strict';

(function ($) {
//use: $('input').humanTyping(array of strings to print);
  $.fn.humanTyping = function (array) {
    var el = this;

    function toAdd(l) {
      var current = el.attr('placeholder');
      el.attr('placeholder', current + l);
      return new Promise(function (resolve) {
        return setTimeout(resolve, 100);
      });
    }

    // Print one phrase
    function printPhrase(phrase) {
      return new Promise(function (resolve) {
        // Clear placeholder before typing next phrase
        el.attr('placeholder', ''); //resets placeholder to 0

        var letters = phrase.split('');
        // For each letter in phrase
        letters.reduce(function (promise, letter, index) {
          return promise.then(function (_) {
            // Resolve promise when all letters are typed
            if (index === letters.length - 1) {
              // Delay before start next phrase "typing"
              setTimeout(resolve, 1000);
            }
            return toAdd(letter);
          });
        }, Promise.resolve());
      });
    }

    function printPhrases(arr) {
      // For each phrase
      // wait for phrase to be typed
      // before start typing next
      arr.reduce(function (promise, phrase) {
        return promise.then(function (_) {
          return printPhrase(phrase);
        });
      }, Promise.resolve());
    }

    return printPhrases(array);
  };
})(jQuery);