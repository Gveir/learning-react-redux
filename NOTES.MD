# Installation

## Install create-react-app

```
npm install -g create-react-app
```

or

```
yarn global add create-react-app
```

## Generate new React project

```
create-react-app {app-name}
```

## Starting React app

```
yarn start
```

# JSX

## Styling

Html

```html
<button
  style="background-color: blue; color: white; border: 1px solid red;"
></button>
```

JSX

```JSX
<button style={{ backgroundColor: "blue", color: "white", border: "1px solid red" }} />
```

### SemanticUI

Free, open source UI library

semantic-ui.com

## Referencing variables

```JSX
const style={ backgroundColor: "green" }
const text="Hello World!"
<div style={style}>{text}</div>
```

## Components and Props

- Component nesting
- Component reusability
- component configuration

## [Faker.js](https://github.com/marak/Faker.js/)

Generating fake realistic data in node.js and browser.
