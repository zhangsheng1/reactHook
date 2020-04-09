import React from 'react'
import { withRouter, Switch, Redirect ,Route} from 'react-router-dom'
import Login from '../../routes/Login/index'

class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <Route exact path='/home' component={Login}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(ContentMain)