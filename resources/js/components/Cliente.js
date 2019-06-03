import React, { Component } from 'react'
import List from './List'

class Cliente extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      items: []
    }
  }

  /*componentDidMount() {
  getList().then(data => {
    //console.log(data);
    this.setState({
      items: [...this.state.items, ...data]
    });
  });
}*/

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h1 className="text-center">Lista de Clientes</h1>
            <List />
          </div>
        </div>
      </div>
    )
  }
}

export default Cliente
