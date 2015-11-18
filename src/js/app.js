import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import $ from './token';

class AvatarItem extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      profileObj: []
    };
  }

  componentDidMount(){
    this.getUserData();
    console.log('called mount');
  }

  getUserData(){
    jQuery.ajax('https://api.github.com/users/Hamblok0')
      .then( response => {
        this.setState({
          profileObj: response
        });
      });
  }

  render (){
    return (
      <img className="avatar" src={this.state.profileObj.avatar_url}/>
    )
  }

};

ReactDOM.render(
  <AvatarItem/>,
  document.getElementById('avatarItem')
);
