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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact={true} path="/">
              <ProblemList/>
            </Route>
            <Route path="/problem/:id" component={CodeEnvironment} />
          </Switch>
        </div>
      </Router>            
    )
  }
}

export default App
