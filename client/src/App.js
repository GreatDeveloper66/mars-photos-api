/*
import React, { Component } from 'react'
import './App.css'
class App extends Component {
  state = {
    cow: '',
    text: ''
  }
componentDidMount() {
    this.fetchCow()
  }
fetchCow = async () => {
    const response = await fetch(`/api/cow`)
    const initialCow = await response.json()
    const cow = initialCow.moo
    this.setState({ cow })
  }
customCow = async evt => {
    evt.preventDefault()
    const text = this.state.text
    const response = await fetch(`/api/cow/${text}`)
    const custom = await response.json()
    const cow = custom.moo
    this.setState({ cow, text: '' })
  }
handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
    console.log(this.state.text)
  }
render() {
    return (
      <div className="App">
        <h3>Text Cow. Moo</h3>
        <code>{this.state.cow}</code>
        <form onSubmit={this.customCow}>
          <label>Custom Cow Text:</label>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="submit">Show me a talking cow!</button>
        </form>
      </div>
    )
  }
}
export default App

*/



import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mars from './Components/Mars'
//import Register from './Components/Register'
//import SignIn from './Components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={ Mars } />
        //<Route exact path = '/Register' component={ Register } />
        //<Route exact path = '/SignIn' component= { SignIn } />
      </Switch>
    </Router>
  );
}

export default App
