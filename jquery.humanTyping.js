/* ======================================================================================================
jquery.humanTyping for JQuery
Allows you to simulate a human typing a phrase as a placeholder for a form input field or as simple text.

Author: Manuel InHertz
Docs & Repo: https://github.com/manuel-inhertz/jquery.humanTyping
wwww.manuel-inhertz.com

======================================================================================================== */

"use strict";

(function ($) {
  $.fn.humanTyping = function (array) {
    var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var el = this;

    if (el.data('placeholder')) {
      var printPhrases = array.reduce(function (promise, phrase) {
        return promise.then(function (_) {
          //for each phrase
          return new Promise(function (resolve) {
            // Clear value before typing next phrase
            el.attr('placeholder', '');
            var letters = phrase.split(""); // For each letter in phrase

            letters.reduce(function (promise, letter, index) {
              return promise.then(function (_) {
                // Resolve promise when all letters are typed
                if (index === letters.length - 1) {
                  // Delay before start next phrase "typing"
                  setTimeout(resolve, 1000);
                }

                var currentVal = el.attr('placeholder');
                el.attr('placeholder', currentVal + letter);
                return new Promise(function (resolve) {
                  setTimeout(resolve, speed);
                });
              });
            }, Promise.resolve());
          });
        });
      }, Promise.resolve());
    } else {
      var _printPhrases = array.reduce(function (promise, phrase) {
        return promise.then(function (_) {
          //for each phrase
          return new Promise(function (resolve) {
            // Clear value before typing next phrase
            el.text('');
            var letters = phrase.split(""); // For each letter in phrase

            letters.reduce(function (promise, letter, index) {
              return promise.then(function (_) {
                // Resolve promise when all letters are typed
                if (index === letters.length - 1) {
                  // Delay before start next phrase "typing"
                  setTimeout(resolve, 1000);
                }

                var currentVal = el.text();
                el.text(currentVal + letter);
                return new Promise(function (resolve) {
                  setTimeout(resolve, speed);
                });
              });
            }, Promise.resolve());
          });
        });
      }, Promise.resolve());
    }
  };
})(jQuery);