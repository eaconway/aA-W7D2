import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = {
      title: '',
      body: ''
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueId = this.uniqueId.bind(this);
  }

  uniqueId() {
    return new Date().getTime();
  }

  handleChangeTitle(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleChangeBody(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo({id: this.uniqueId(), title: this.state.title, body: this.state.body, done: true });
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <div>
        <h1>Todo Form</h1>
        <ul>
          {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>

          <label>Title:
          <input type='text' value={this.state.title}
            onChange={this.handleChangeTitle}></input>
          </label>

          <label>Body:
            <input type='text' value={this.state.body}
              onChange={this.handleChangeBody}></input>
          </label>

          <input type='submit' value='Submit'></input>
        </form>
      </div>
    );
  }
}


export default TodoForm;
