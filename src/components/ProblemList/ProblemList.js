import React from 'react'
import axios from 'axios'
import ProblemListing from '../../containers/ProblemListing/ProblemListing'
import { Container, ListGroup, Spinner } from 'react-bootstrap'
import URI from '../../endpoints/endpoints'

class ProblemList extends React.Component {
  state = {
    problemListings: [],
    problemsLoaded: false
  }

  componentDidMount() {
    axios.get(`${URI}api/problems`).then(response => {
      this.setState({problemListings: response.data, problemsLoaded: true})
    })
  }

  render() {
    if (this.state.problemsLoaded) {
      return (
        <Container>
          <ListGroup className='mt-5'>
            {this.state.problemListings.map((obj, i) => {
              return <ProblemListing key={obj.id} id={obj.id} title={obj.title}/>
            })}
          </ListGroup>
        </Container>
      )
    } else {
      return (
        <Container>
          <div className='text-center'>
            <Spinner animation="border" role="status" variant="light">
              <span className="sr-only">Loading...</span>
            </Spinner>
            <p><small className='text-white'>Loading Problems... (The backend is on a free heroku dyno, so give it a couple of seconds to load)</small></p>
          </div>
        </Container>
      )
    }
  }


}

export default ProblemList
