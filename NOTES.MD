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
<button style="background-color: blue; color: white; border: 1px solid red;">
  Button text
</button>
```

JSX

```JSX
<button style={{ backgroundColor: "blue", color: "white", border: "1px solid red" }} >
  Button text
</button>
```

### [SemanticUI](https://semantic-ui.com/)

Free, open source UI library

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

### Props

Passing data from a **parent** component to a **child** component. Goal is to customize or configure a child component.

```sequence
Parent->Child: Props
```

#### props.children

Pass other component into a component

```JSX
const Child = () => {
  return <div className="child" >Some content</div>
}

const Parent = props => {
  return <div className="parent" >{props.children}</div>
}

const App = () => {
  return <Parent><Child /><Parent>
}
```

### State

#### Initialise state

- By constructor

```JSX
constructor (props) {
    super(props);
    this.state = { someProp: "someValue" };
}
```

- By constructor - alternative way

```JSX
class App extends React.Component {
  state = { someProp: "someValue" };
}
```

- Method componentDidMount - good place to do data-loading

```JSX
componentDidMount() {
    this.setState({ someProp: "someValue" });

    //data-loading
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }
```

## [Faker.js](https://github.com/marak/Faker.js/)

Generating fake realistic data in node.js and browser.
