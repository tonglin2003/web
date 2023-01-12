import React from 'react'
import {Link} from "react-router-dom";


const UserContext = React.createContext({
    username: 'janedoe',
    firstName: 'Jane',
    lastName: 'Doe'
  });
  const UserConsumer = UserContext.Consumer;
  
  class App extends React.Component {
    state = {
      user: {
        username: 'janedoe',
        firstName: 'Jane',
        lastName: 'Doe'
      }
    }
  
    render() {
      return(
        <div className="box">
          <User />
        </div>
      )
    }
  }
  
  const User = () => (
    <div>
      <UserProfile />
    </div>
  )
  
  const UserProfile = (props) => (
    <UserConsumer>
      {context => {
        return(
          <div>
            <div className="subtitle">Profile Page for</div>
            <h1 className="title">{context.username}</h1>
            <UserDetails />
          </div>
        )
      }}
    </UserConsumer>
  )
  
  const UserDetails = () => (
    <div>
      <UserConsumer>
        {context => {
          return (
            <div>
              <p><b>Username:</b> {context.username}</p>
              <p><b>First Name:</b> {context.firstName}</p>
              <p><b>Last Name:</b> {context.lastName}</p>
            </div>
          )
        }}
      </UserConsumer>
    </div>
  )
  
  ReactDOM.render(<App />, document.getElementById("root"));

  export default JaneDoeProfile