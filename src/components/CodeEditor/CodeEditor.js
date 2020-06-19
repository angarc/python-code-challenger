import React from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-twilight"
import ActionBox from '../ActionsBox/ActionsBox'
import TerminalEmulator from '../TerminalEmulator/TerminalEmulator'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import './CodeEditor.scss'
import { updateCode } from '../../actions/CodeActions'

class CodeEditor extends React.Component {
  render() {
    return(
      <Col lg={this.props.codeEditorWidth} className='CodeEditor'>
        <AceEditor
          placeholder="Python 3.8"
          mode="python"
          theme="twilight"
          name="code-editor"
          width={'auto'}
          height={this.props.codeEditorHeight}
          onLoad={this.onLoad}
          onChange={(code) => this.props.updateCode(code)}
          fontSize={22}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={this.props.code}
          setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          }}
        />

        <TerminalEmulator />        

        <ActionBox/> 
      </Col>
    )
  }
}

const mapStateToProps = state => {
  const { codeEditorWidth, codeEditorHeight } = state.screenLayout
  const { code } = state.codeState
  return { codeEditorWidth, codeEditorHeight, code }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCode: (code) => dispatch(updateCode(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor)
