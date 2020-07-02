import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import CodeEnvironment from './screens/CodeEnvironment'
import NavBar from './containers/NavBar/NavBar'
import ProblemList from './components/ProblemList/ProblemList'
import AboutScreen from './screens/AboutScreen/AboutScreen'

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact={true} path="/">
              <NavBar/>
              <h1 className='title'>Pick A Problem</h1>
              <ProblemList/>
            </Route>
            <Route exact={true} path="/about">
              <NavBar/>
              <AboutScreen/>
            </Route>
            <Route path="/problem/:id" component={CodeEnvironment} />
          </Switch>
        </div>
      </Router>            
    )
  }
}

export default App
