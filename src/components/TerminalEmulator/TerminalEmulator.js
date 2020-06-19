import React from 'react'
import './TerminalEmulator.scss'
import Terminal from 'react-console-emulator'
import { connect } from 'react-redux'

const commands = {
  python: {
    fn: (arg1) => {
      // send api request
      return `${arg1}`
    }
  }
}

class TerminalEmulator extends React.Component {
  render() {
    return(
      <Terminal
        className={this.props.terminalClass}
        commands={commands}
        welcomeMessage={'To test your code, you can run it here!'}
        promptLabel={'me@obcode:~$'}
      />
    )
  }
}

const mapStateToProps = state => {
  const terminalClass = state.screenLayout.terminalClass
  return { terminalClass } 
}

export default connect(mapStateToProps)(TerminalEmulator)
