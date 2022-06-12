import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/items",
      success: (data) => {
        this.setState({
          items: data,
        });
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
export default App;
