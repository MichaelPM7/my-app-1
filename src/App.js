//! import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/task.json";
import Tasks from "./components/Tasks";

/* {
  <div>
  class HelloWorld extends React.Component {
    state = {
      show: true,
    };
    toggleShow = () => {
      this.setState({ show: !this.state.show });
    };
    render() {
      if (this.state.show) {
        return (
          <div id="Fuck">
            <h1>{this.props.subtitle}</h1>
            {this.props.myText}
            <button onClick={this.toggleShow}>Toggle Show</button>
          </div>
        );
      } else {
        return (
          <h1>
            There are not element{" "}
            <button onClick={this.toggleShow}>Toggle Show</button>
          </h1>
        );
      }
    }
  }
  function App() {
    return (
      <div>
        hello world
        <HelloWorld myText="Fuck" subtitle="XD" />
        <HelloWorld myText="Hi bitch" subtitle=":v" />
        <HelloWorld myText="2001" subtitle=":3" />
      </div>
    );
  }
</div>
} */

class App extends Component {
  state = {
    tasks: tasks,
  };
  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
