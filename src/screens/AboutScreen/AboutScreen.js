import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import bear_1 from '../../static/bear_1.jpeg'
import bear_2 from '../../static/bear_2.JPG'
import obi_1 from '../../static/obi_1.png'
import obi_2 from '../../static/obi_2.jpeg'
import './AboutScreen.scss'

class AboutScreen extends React.Component {
  render() {
    return(
      <Container>
        <h1 className='about--h1'>About</h1>

        <Row>
          <Col lg={3}>
            <img className='about--img' src={bear_1} width='100%'/>
          </Col>
          <Col lg={3}>
            <img className='about--img' src={bear_2} width='100%'/>
          </Col>
          <Col lg={3}>
            <img className='about--img' src={obi_1} width='100%'/>
          </Col>
          <Col lg={3}>
            <img className='about--img' src={obi_2} width='100%'/>
          </Col>
        </Row>

        <div className='about--content'>
          <p className='about--p'>I built OBCode for my girlfriend, who very recently decided to change her major to Computer Science and start learning Python.</p>

          <p className='about--p'>
            She texted me once, asking me to quiz her on some of the python subject material she had learned that day. However, it's difficult to write
            code over text messages. So, I got the idea of making a website that could give her python programming challenges, and to welcome her into
            the world of programming in the funnest possible way, I made the central theme of the website her pets!
          </p>

          <p className='about--p'>
            The site is called OBCode because "O" and "B" stand for "Obi" and "Bear", her cat and dog respectively. Every coding problem is related to her pets in some way.
          </p>
        </div>
      </Container>
    )
  }
}

export default AboutScreen