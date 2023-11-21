import React, {ChangeEvent} from "react";
import styled from "styled-components";

type ProfileStatusPropsType = {
    status: string
    UpdateUserStatusTC: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    editModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.UpdateUserStatusTC(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <ProfileStatusBlock>
                {
                    !this.state.editMode &&
                    <p onDoubleClick={this.editModeOn}>{this.props.status || '------'}</p>
                }
                {
                    this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus={true} onDoubleClick={this.editModeOff}
                           value={this.state.status} type="text"/>
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

  input {
    padding: 0 5px;
    border-radius: 2px;
    border: 1px solid ${({theme}) => theme.colors.border};
  }
`
