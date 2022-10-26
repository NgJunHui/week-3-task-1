import React, { Component } from 'react'
import ScoreUpdate from './ScoreUpdate';
import ApiCall from './ApiCall';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      arrData: []
    }
  }

  componentDidMount = () => {
    axios.get('https://official-joke-api.appspot.com/random_ten')
      .then((res) => {
        this.setState({
          arrData: res.data
        })
      }).catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <ApiCall arrData={this.state.arrData} />
        <ScoreUpdate />
      </React.Fragment>
    )
  }
}
export default App;