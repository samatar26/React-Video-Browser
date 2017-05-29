# React-Video-Browser
A React app using the youtube api following the Modern React and Redux course on udemy https://react-video-browser.surge.sh

### JSX
JSC gets transpiled to vanilla JavaScript which is supported by the browser. You can use [this repl](http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=react%2Cstage-2&targets=&browsers=&builtIns=false&debug=false&experimental=false&loose=false&spec=false&code=&playground=true) to see what your ES6/JSX will ultimately look like in the browser. JSX makes our component look a lot more legible/cleaner to see what's going on.

You have to pass an instance of the component when trying to render it to the DOM. The way to do this is by wrapping the name of your class in a JSX tag.

### State
Whenever the state object changes, the component will immediately rerender and all of its children will rerender.
The constructor function gets called whenever we create a new instance of a class.


### Controlled Component
A controlled field, is a form element whose value is set by the state object.
The state should tell the input what the current value should be.
SearchBar - React Flow:
```js
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.root'));

///SearchBar
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ev => this.setState({ term: ev.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;


```
The app is loaded and renders an instance of the SearchBar Component. So the constructor is called and this.state is set to an empty string. The input value is set to the empty string. Whenever setState is called, the component is rerendered and the input's value is updated to the new term property within state.
