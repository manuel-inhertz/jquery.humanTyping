/* ======================================================================================================
jquery.humanTyping for JQuery - ES6 version.
Allows you to simulate a human typing a phrase as a placeholder for a form input field or as simple text.

Author: Manuel InHertz
Docs & Repo: https://github.com/manuel-inhertz/jquery.humanTyping
wwww.manuel-inhertz.com

======================================================================================================== */

(function($) {

    $.fn.humanTyping = function(array, speed = 100) {
        const el = this;
        if (el.data('placeholder')) {
            const printPhrases = array.reduce(function(promise, phrase) {
                return promise.then(function(_) {
                    //for each phrase
                    return new Promise(function(resolve) {
                        // Clear value before typing next phrase
                        el.attr('placeholder', '');
                        var letters = phrase.split("");
                        // For each letter in phrase
                        letters.reduce(function(promise, letter, index) {
                            return promise.then(function(_) {
                                // Resolve promise when all letters are typed
                                if (index === letters.length - 1) {
                                    // Delay before start next phrase "typing"
                                    setTimeout(resolve, 1000);
                                }
                                const currentVal = el.attr('placeholder');
                                el.attr('placeholder', currentVal + letter);
                                return new Promise(function(resolve) {
                                    setTimeout(resolve, speed);
                                });
                            });
                        }, Promise.resolve());
                    });
                });
            }, Promise.resolve());
        } else {
            const printPhrases = array.reduce(function(promise, phrase) {
                return promise.then(function(_) {
                    //for each phrase
                    return new Promise(function(resolve) {
                        // Clear value before typing next phrase
                        el.text('');
                        var letters = phrase.split("");
                        // For each letter in phrase
                        letters.reduce(function(promise, letter, index) {
                            return promise.then(function(_) {
                                // Resolve promise when all letters are typed
                                if (index === letters.length - 1) {
                                    // Delay before start next phrase "typing"
                                    setTimeout(resolve, 1000);
                                }
                                const currentVal = el.text();
                                el.text(currentVal + letter);
                                return new Promise(function(resolve) {
                                    setTimeout(resolve, speed);
                                });
                            });
                        }, Promise.resolve());
                    });
                });
            }, Promise.resolve());
        }
    }

}(jQuery));