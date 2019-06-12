// https://reactjs.org/docs/hooks-reference.html
// useState is a Hook; Hooks are functions that let you “hook into” React state and
// lifecycle features from function components;  Their names always start with use.
// They let you organize side effects in a component by what pieces are related
// (such as adding and removing a subscription),rather than forcing a split based on lifecycle methods.
// Hooks don’t work inside classes
// React provides a few built-in Hooks like useState.
// You can also create your own Hooks to reuse stateful behavior between different components.
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // useState returns a pair: the current state value and a function that lets you update it
  // The array destructuring syntax lets us give different names to the state variables we declared by calling useState
  // Declare a new state variable, which we'll call "count"
  // The only argument to useState is the initial state, used during the first render.
  // equivalent to this.state = { count: 0 };
  // useState is a new way to use the exact same capabilities that this.state provides in a class
  // unlike this.setState in a class, updating a state variable always replaces it instead of merging it
  // this syntax is  “array destructuring”
  // we’re making two new variables count and setCount, where count is set to the
  // first value returned by useState, and setCount is the second
  const [count, setCount] = useState(0);
  /* 
  const [fruit, setFruit] = useState('banana'); 
  is equivalent to:
    var fruitStateVariable = useState('banana'); // Returns a pair
    var fruit = fruitStateVariable[0]; // First item in a pair
    var setFruit = fruitStateVariable[1]; // Second item in a pair
  */

  // If you’re familiar with React class lifecycle methods, you can think of useEffect Hook
  // as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  /* 
  Data fetching, setting up a subscription, and manually changing the DOM in React components
  are all examples of side effects. There are two common kinds of side effects in React components:
    those that don’t require cleanup, 
    and those that do.
  
  Effects Without Cleanup: Sometimes, we want to run some additional code after React has 
  updated the DOM. Network requests, manual DOM mutations, and logging are common examples 
  of effects that don’t require a cleanup. We say that because we can run them and immediately 
  forget about them.

  Effects with Cleanup: For example, we might want to set up a subscription to some external data source. 
  In that case, it is important to clean up so that we don’t introduce a memory leak! This is a case where
  we would have used componentWillUnmount. In the case of effects, if your effect returns a function, 
  React will run it when it is time to clean up. effects might not have a cleanup phase, and don’t return anything.
  */
  // When you call useEffect, you’re telling React to run your “effect” function
  // after flushing changes to the DOM - i.e. after render.
  // Effects are declared inside the component so they have access to its props and state.
  // By default, React runs the effects after every render — including the first render.
  // You can tell React to skip applying an effect if certain values haven’t changed between
  // re-renders. To do so, pass an array as an optional second argument to useEffect.
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;

    return () => {
      // clean up happens here, for eg., unsubscribe etc. when the
      // component unmounts, as well as before re-running the effect due to a subsequent render.
    };
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        React Hooks
      </header>
      <div>
        <p />
        {/* this.setState({ count: this.state.count + 1 }) */}
        <button onClick={() => setCount(count + 1)}>
          {/* equivalent to {this.state.count} */}
          You Clicked me {count} times
        </button>
      </div>
    </div>
  );
}

export default App;
