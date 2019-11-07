import React, { Component } from 'react';
import ProfileAndHamburguerComponent from '../components/ProfileAndHamburguerComponent';

class ProfileAndHamburguerContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          show: false         
      };
    };

    render() {
        return (
            <div>
                <ProfileAndHamburguerComponent
                />
                
            </div>
        );
    }
}

export default ProfileAndHamburguerContainer;