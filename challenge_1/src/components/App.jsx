import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: undefined }
  }

    handleText (e) {
      if(e.key === 'Enter'){
        console.log(e.target.value);
        e.target.value = '';
      }
    }

    render () {
      return (
      <div>
        Search for History
        <div>
          <input type="text" placeholder="Search.." onKeyDown={this.handleText} />
        </div>
      </div>
      )
    }
}

export default App;

