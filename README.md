# jquery.humanTyping for JQuery

A Jquery plugin that allows you to simulate a human typing a phrase as a placeholder for a form input field or as simple text.

ES6 file also availble.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)
- [License](#license)

## Installation

Include it in your project after the Jquery <link> tag.

```sh
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="path/js/jquery.humanTyping.js"></script>
```

## Usage

Takes 2 arguments:

- Array of strings
- Write speed in milliseconds (default: 100)

Pass "data-placeholder" or "data-text" to the element tag (default: text)

```sh

	<input type="text" data-placeholder>

    var typingPh = [
        "Search Website e.g. \"Dancing Cats\"",
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "JS is so strange :)"
    ]; 

    $('input').humanTyping(typingPh, 150);
    
```
![Preview](screen.gif)

## Support

Please [open an issue](https://github.com/fraction/jquery-humantyping/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/manuel-inhertz/jquery.humanTyping/pull/new/master).

## License

Licensed under the MIT License.
