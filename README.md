# Calculator

A simple web calculator built with HTML, CSS, and vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Features

- Addition, subtraction, multiplication, and division
- Chained operations, evaluated one pair at a time (`2 + 3 x 4` gives `20`)
- Decimal numbers, with only one decimal point allowed per number
- Long decimal results are rounded to 8 decimal places
- Delete button to remove the last entry
- AC button to clear everything
- Division by zero shows an error message instead of crashing
- Full keyboard support

## Keyboard Shortcuts

| Key               | Action         |
| ----------------- | -------------- |
| `0` - `9`         | Enter a digit  |
| `.`               | Decimal point  |
| `+` `-` `*` `/`   | Operators      |
| `Enter` or `=`    | Calculate      |
| `Backspace`       | Delete         |
| `Escape`          | Clear all      |

## How It Works

The calculator keeps its state in three variables: the first number (`a`), the operator, and the second number (`b`). The display is never edited directly. Every button press updates those variables, and a single `updateDisplay()` function redraws the screen from them.

Keyboard presses are mapped to the matching on-screen button and trigger a click on it, so the keyboard and the mouse share exactly the same logic.

## Project Structure

```
calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in any modern browser.

No build step or dependencies are required. The delete button icon is loaded from [Ionicons](https://ionic.io/ionicons) via CDN, so an internet connection is needed for the icon to appear.

## What I Learned

- Keeping a single source of truth for state and deriving the display from it
- Handling edge cases such as division by zero, leading zeros, and chained operators
- Why mixing strings and numbers in conditions causes bugs (a result of `0` is falsy)
- Using event delegation and a key-to-button map to avoid duplicated logic

## Known Limitations

- Very long results (for example `99999999 x 99999999`) can overflow the display.
- Operations are evaluated left to right, without standard operator precedence.