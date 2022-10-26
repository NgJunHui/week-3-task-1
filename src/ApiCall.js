import React from 'react'
import RiseLoader from "react-spinners/RiseLoader";

const ApiCall = (props) => {
  const { arrData } = props;

  const postList = arrData.length ? (
    arrData.slice(0, 5).map((info => {
      return (
        <div key={info.id}>
          <p><span className='jokes-title'>Setup: </span>{info.setup}</p>
          <p><span className='jokes-title'>Punchline: </span>{info.punchline}</p>
          <p><span className='jokes-title'>Type: </span>{info.type}</p>
          <hr style={{ margin: 'auto', width: '80%' }} />
        </div>

      )
    }))) : (<RiseLoader
      color={'black'}
      loading={true}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />)

  return (
    <div>
      <h1>Question 1: Fetch API - Random Jokes Generator</h1>
      {postList}
    </div>
  )
}

export default ApiCall;