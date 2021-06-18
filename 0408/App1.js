import React from "react";

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  class Avatar extends React.Component{
      render(){
        return (
          <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
          />
        );
      }
    }
  
  class UserInfo extends React.Component {
      render(){
        return (
          <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
          </div>
        );
      }
    }
  
  class App extends React.Component {
    render(){  
        return (
          <div className="Comment">
              <UserInfo user={props.author} />
              <div className="Commet-text">{props.text}</div>
              <div className="Comment-data">
                  {formatData(this.props.data)}
              </div>
          </div>
        );
      }
    }
