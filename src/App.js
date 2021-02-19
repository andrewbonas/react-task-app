import React, {
  Component
} from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const {
      task,
      tasks
    } = this.state;

    return ( <
      div className = "form-container" >
      <
      form onSubmit = {
        this.onSubmitTask
      } >
      <
      label htmlFor = "taskInput" > Enter Task < /label> <
      input onChange = {
        this.handleChange
      }
      value = {
        this.state.task
      }
      type = "text"
      id = "textInput" / >
      <
      button type = "submit" >
      add task <
      /button> <
      /form> <
      Overview tasks = {
        tasks
      }
      /> <
      /div>
    );
  }
}

export default App;
