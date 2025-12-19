import { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'This is a class component example'
    };
  }

  render() {
    return (
      <div className="card">
        <h3>Class Component</h3>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default ClassComponent;