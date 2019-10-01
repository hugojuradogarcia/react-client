/*import React from 'react';
import './App.css';*/
import React, {Component} from 'react';
import Contacts from './components/categories';

class App extends Component {
  render() {
    return (
        <Contacts categories={this.state.categories} />
    )
  }

  state = {
    categories: []
  };

  componentDidMount() {
    fetch('https://192.168.10.55:6002/v1/categories'/*, {
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'}
            }*/)
        .then(res => res.json())
        .then((data) => {
          this.setState({ categories: data })
        })
        .catch(console.log)
  }
}

export default App;
