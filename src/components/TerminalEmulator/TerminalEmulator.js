import React from 'react'
import './TerminalEmulator.scss'
import Terminal from 'react-console-emulator'
import { connect } from 'react-redux'
import axios from 'axios'

class TerminalEmulator extends React.Component {
  constructor (props) {
    super(props)
    this.terminal = React.createRef()
  }

  commands = {
    python: {
      fn: (arg1) => {
        const terminal = this.terminal.current
        if (arg1 === undefined) {
          return "Sorry, we don't support running python directly in the browser.\n" +
            "At any given point, you can only run the script of the file you're working on."
        }
        // send api request
        const code = this.props.code
        axios({
          method: 'get',
          url: 'http://localhost:8000/api/run',
          params: {
            code
          }
        }).then((response) => {
          terminal.pushToStdout(response.data.output)
        }).catch((error) => {
          console.log(error)
        });
        return ""
      }
    }
  }

  render() {
    return(
      <Terminal
        className={this.props.terminalClass}
        commands={this.commands}
        ref={this.terminal}
        welcomeMessage={'-- To test your code, you can run it here in the terminal. The name of python file is the name of the challenge.'}
        promptLabel={'me@obcode:~$'}
      />
    )
  }
}

const mapStateToProps = state => {
  const terminalClass = state.screenLayout.terminalClass
  const code = state.codeState.code
  return { terminalClass, code } 
}

export default connect(mapStateToProps)(TerminalEmulator)
