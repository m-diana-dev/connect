import React from "react";
import styled from "styled-components";

type ProfileStatusPropsType = {
    status: string
}
class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }

    editModeOn() {
        this.setState({
            editMode: true
        })
    }

    editModeOff() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <ProfileStatusBlock>
                {
                    !this.state.editMode &&
                    <p onDoubleClick={this.editModeOn.bind(this)}>{this.props.status}</p>
                }
                {
                    this.state.editMode &&
                    <input onDoubleClick={this.editModeOff.bind(this)} value={this.props.status} type="text"/>
                }
            </ProfileStatusBlock>
        )
    }
}

export default ProfileStatus;


const ProfileStatusBlock = styled.div`
  margin-bottom: 10px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 7px;
  }
  input{
    padding: 0 5px;
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.colors.border};
  }
`
