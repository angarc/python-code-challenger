import React from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-twilight"
import ActionBox from '../ActionsBox/ActionsBox'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import './CodeEditor.scss'

class CodeEditor extends React.Component {
  onChange(newValue) {
    console.log(newValue);
  }

  render() {
    return(
      <Col lg={this.props.codeEditorWidth} className='CodeEditor'>
        <AceEditor
          placeholder="Placeholder Text"
          mode="python"
          theme="twilight"
          name="code-editor"
          width={'auto'}
          height={'90vh'}
          onLoad={this.onLoad}
          onChange={(value) => this.onChange(value)}
          fontSize={22}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={`def solution():\n\tpass`}
          setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          }}
        />

        <ActionBox/> 
      </Col>
    )
  }
}

const mapStateToProps = state => {
  const codeEditorWidth = state.screenLayout.codeEditorWidth
  return { codeEditorWidth }
}

export default connect(mapStateToProps)(CodeEditor)
