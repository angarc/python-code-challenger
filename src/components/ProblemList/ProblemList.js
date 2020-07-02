import React from 'react'
import axios from 'axios'
import ProblemListing from '../../containers/ProblemListing/ProblemListing'
import { Container, ListGroup } from 'react-bootstrap'
import URI from '../../endpoints/endpoints'

class ProblemList extends React.Component {
  state = {
    problemListings: []
  }

  componentDidMount() {
    axios.get(`${URI}api/problems`).then(response => {
      this.setState({problemListings: response.data})
    })
  }

  render() {
    return (
      <Container>
        <ListGroup className='mt-5'>
          {this.state.problemListings.map((obj, i) => {
            return <ProblemListing key={obj.id} id={obj.id} title={obj.title}/>
          })}
        </ListGroup>
      </Container>
    )
  }
}

export default ProblemList
