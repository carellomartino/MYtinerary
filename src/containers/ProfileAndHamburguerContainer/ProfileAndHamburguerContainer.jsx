import React, { Component } from 'react';
import ProfileAndHamburguerComponent from '../../components/ProfileAndHamburguerComponent/ProfileAndHamburguerComponent';

class ProfileAndHamburguerContainer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          show: false,
          dataDismiss: "modal"
      };
      this.changeShow = this.changeShow.bind(this)
    };

    changeShow(){
        console.log("SSISISISI")
        this.state.show ? this.setState({show: false}) : this.setState({show: true})
    }

    render() {
        return (
            <div>
                <ProfileAndHamburguerComponent
                show={this.state.show}
                changeShow={this.changeShow}
                />
                
            </div>
        );
    }
}

export default ProfileAndHamburguerContainer;