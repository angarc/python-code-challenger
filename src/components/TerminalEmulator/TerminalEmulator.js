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

        if (arg1 !== this.props.problemTitle) {
          return `File "${arg1}" non found.\n`
        }
        // send api request
        const code = this.props.code
        const problemId = this.props.problemId
        axios({
          method: 'get',
          url: `http://localhost:8000/api/run/${problemId}`,
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
  const problemId = state.problem.id
  const problemTitle = state.problem.title
  const code = state.codeState.code
  return { terminalClass, code, problemId, problemTitle } 
}

export default connect(mapStateToProps)(TerminalEmulator)
