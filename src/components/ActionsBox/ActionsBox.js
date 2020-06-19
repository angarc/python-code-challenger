import React from 'react'
import './ActionBox.scss'
import { Button } from 'react-bootstrap'

class ActionBox extends React.Component {
  render() {
    return (
      <div className='ActionBox'>
        <Button variant="light" className='mr-1'>Run Test Cases</Button>
        <Button variant="success">Submit</Button>
      </div>
    )
  }
}

export default ActionBox
