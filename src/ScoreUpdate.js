import React, { Component } from 'react'
import { Box, TextField, Typography, Button } from '@mui/material';

class ScoreUpdate extends Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }
  handleClick = () => {
    let u = document.getElementById("user-input").value;
    this.setState({ score: u })
  }
  shouldComponentUpdate = (nextProps, nextState) => { //return true false 
    let validStatus = false
    if (nextState.score > this.state.score) {
      validStatus = true;
    }
    else {
      validStatus = false;
    }
    return validStatus;
  }
  componentDidUpdate = (prevProps, prevState) => {  //modal
    alert("Congratulations! " + this.state.score + " is a higher score.")
  }
  render() {
    return (

      <Box textAlign='center'>
        <h1>Question 2: Score Update</h1>
        <form>
          <TextField type="number" id="user-input" label="Enter your score" helperText="*Please enter numbers only." />
        </form>
        <Typography gutterBottom sx={{ fontSize: 22, }} value={this.state.score}>Highest score is: {this.state.score} </Typography>
        <Button variant="contained" onClick={this.handleClick}
          sx={{ backgroundColor: 'black', width: 200, mb: 30 }}>Submit</Button>
      </Box>
    )
  }
}
export default ScoreUpdate;