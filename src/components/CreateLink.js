import React, { Component } from 'react'
import CreateLinkMutation from '../mutations/CreateLinkMutation'
import { GC_USER_ID } from '../constants'
import CustomEditor from './CustomEditor';
import {EditorState} from 'draft-js';

class CreateLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      url: '',
      editorState: EditorState.createEmpty()
    }
    this.onChange = (editorState) => this.setState({editorState});
  }

  render() {

    return (
      <div>
        <CustomEditor editorState={this.state.editorState} onChange={this.onChange} placeholder='A description for the link'  />
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
            type='text'
            placeholder='A description for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        
        <div
          className='button'
          onClick={() => this._createLink()}
        >
          submit
        </div>
      </div>
    )

  }

  _createLink = () => {
  	const postedById = localStorage.getItem(GC_USER_ID)
	if (!postedById) {
		console.error('No user logged in')
		return
	}
	const { description, url } = this.state
	CreateLinkMutation(postedById, description, url, () => this.props.history.push('/'))
  }

}

export default CreateLink