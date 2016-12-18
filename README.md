# random-tachyons-a11y-combo

## Why?
I had a list of `nav` items that I wanted to be randomly generate colors for and I was using <a href="https://tachyons.io">Tachyons</a> in the project. So...

```javascript
// import (or whatever) `randTach` (or whatever) from 'random-tachyons-a11y-combo'

const randTach = require('random-tachyons-a11y-combo');

// provide a color code:
// NB: color code provided MUST be in `./src/colors.js`

randTach('#111');
// returns: ['near-black', 'washed-blue']

randTach('#111');
// returns: ['near-black', 'white-50']

randTach('#111');
// returns: ['near-black', 'light-yellow']
```

Super duper WIP. Assistance appreciated.

This project is inspired by <a href="https://randoma11y.com">random-a11y</a>
