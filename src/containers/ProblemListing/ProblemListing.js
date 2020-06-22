import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";

const problemListing = (props) => {
  return (
    <ListGroup.Item>
      <Link to={`/problem/${props.id}`}>{ props.title }</Link>
    </ListGroup.Item>
  )
}

export default problemListing
