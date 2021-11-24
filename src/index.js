import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    bgColor: "black",
  };

  onInputChange(e) {
    this.setState({ bgColor: e.target.value });
    this.changeColor();
  }

  changeColor() {
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = this.state.bgColor;
    }, 500);
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Type a color"
          onChange={(e) => this.onInputChange(e)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
