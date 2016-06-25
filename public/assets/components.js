// import Button from '../bower_components/react-bootstrap/react-bootstrap';
// const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

// const buttonsInstance = (
//   <div className="well" style={wellStyles}>
//     <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
//     <Button bsSize="large" block>Block level button</Button>
//   </div>
// );


class ToDo extends React.Component {
  constructor(props){
    super(props);
        this.state = {
       todoItem: ''
    };
  }


  render() {
    return (
      <div className='well'>
        <CreateToDos/>
        <ToDoList/>

      </div>
      )
  }
}


class CreateToDos extends React.Component {
    constructor() {
    super();
    this.state = {
       todoItem: ''
    };
  }


  render() {
    return (
        <div >
          <div className="form-group">
            <label for="usr">Add Todo </label>
            <input type="text" className="form-control" id="usr" ref={c => this._body = c}  onChange={this.getToDoText.bind(this)}/>
            <br/>
            <button type='submit' classNames='btn' onSubmit={this.addItem.bind(this)}>Add</button>
          </div>
        </div>
      )
  }
    getToDoText() {
    this.setState({todoItem: this._body.value});
    console.log(this.state.todoItem);
  }

    addItem(e){
      e.preventDefault();
      console.log(this.state.todoItem)
      this.setState({todoItem: this.state.todoItem})

    }
}

class ToDoList extends React.Component {
  render() {
    return (
       <div className="panel">
         <h2 className='text-center'>To Do List:</h2>

       </div>
    )
  }
}

// class ToDoItem extends React.Compoenet {
//   render() {
//     return (
//         <div>

//         </div>
//       )
//   }
// }






ReactDOM.render(<ToDo />, document.getElementById('app'));
