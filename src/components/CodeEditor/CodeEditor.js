import React from 'react'
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-python"
import "ace-builds/src-noconflict/theme-twilight"
import ActionBox from '../ActionsBox/ActionsBox'
import { Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import './CodeEditor.scss'
import { expandProblem } from '../../actions/ScreenLayoutActions'

class CodeEditor extends React.Component {
  onChange(newValue) {
    console.log(newValue);
  }

  displayMinimizeButton() {
    let buttonJsx = null
    console.log(this.props.codeEditorWidth)
    if (this.props.codeEditorWidth == 12) {
      buttonJsx = <button onClick={() => this.minimizeButtonClicked()} className='expandButton'><i className='fa fa-times'></i></button> 
    }

    return buttonJsx
  }

  minimizeButtonClicked() {
    this.props.expandProblem()
  }

  render() {
    return(
      <Col lg={this.props.codeEditorWidth} className='CodeEditor'>
        {this.displayMinimizeButton()}
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

const mapDispatchToProps = dispatch => {
  return { 
    expandProblem: () => dispatch(expandProblem())
  }
}

const mapStateToProps = state => {
  const codeEditorWidth = state.screenLayout.codeEditorWidth
  return { codeEditorWidth }
}

export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor)
