import styled from "styled-components";
import {H1} from "../../../styles/Theme.tsx";
import defaultAvatar from "../../../assets/images/users/avatar.webp";
import {ProfileInfoType} from "../../../redux/profile-reducer.ts";
import ProfileStatus from "../ProfileStatus.tsx";
import {Input} from "../../common/Input/Input.tsx";
import {ChangeEvent} from "react";
import {Icon} from "../../common/Icon/Icon.tsx";

export type ProfileInfoPropsType = {
    profile: ProfileInfoType | null
    status: string
    UpdateUserStatusTC: (status: string) => void
    isOwner: boolean
    savePhotoTC: (photo: File) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const mainPhotoSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) props.savePhotoTC(e.target.files[0])
    }
    if (props.profile) {
        const img = props.profile.photos.large ? props.profile.photos.large : defaultAvatar
        const facebook = props.profile.contacts.facebook ?
            <a href={props.profile.contacts.facebook}>
                <Icon id={'facebook'} height={'20'} width={'20'} viewBox={'0 0 40 40'}/>
            </a> : undefined
        const vk = props.profile.contacts.vk ?
            <a href={props.profile.contacts.vk}>
                <Icon id={'vk'} height={'20'} width={'20'} viewBox={'0 0 55 55'}/>
            </a> : undefined
        const twitter = props.profile.contacts.twitter ?
            <a href={props.profile.contacts.twitter}>
                <Icon id={'twitter'} height={'20'} width={'20'} viewBox={'0 0 50 55'}/>
            </a> : undefined
        const instagram = props.profile.contacts.instagram ?
            <a href={props.profile.contacts.instagram}>
                <Icon id={'instagram'} height={'20'} width={'20'} viewBox={'0 0 53 53'}/>
            </a> : undefined
        const youtube = props.profile.contacts.youtube ?
            <a href={props.profile.contacts.youtube}>
                <Icon id={'youtube'} height={'20'} width={'20'} viewBox={'0 0 440 550'}/>
            </a> : undefined
        const github = props.profile.contacts.github ?
            <a href={props.profile.contacts.github}>
                <Icon id={'github'} height={'20'} width={'20'} viewBox={'0 0 52 52'}/>
            </a> : undefined
        return (
            <MainBlockTop>
                <Avatar>
                    <img
                        src={img} alt="avatar"/>
                    {props.isOwner &&

                        <label>
                            <input type={'file'} onChange={mainPhotoSelectHandler}/>
                            <Icon id={'photo-add'} width={'30'} height={'30'} viewBox={'0 0 25 25'}/>
                        </label>
                    }
                </Avatar>
                <UserInfo>
                    <H1>{props.profile.fullName}</H1>
                    <ProfileStatus status={props.status} UpdateUserStatusTC={props.UpdateUserStatusTC}/>
                    <p>{props.profile.aboutMe}</p>
                    <p>{props.profile.lookingForAJob ? 'I\'m looking for a job.' : 'I\'m not looking for a job.'}
                        {props.profile.lookingForAJobDescription ? ` (${props.profile.lookingForAJobDescription})` : ''}</p>
                    <ContactsRow>
                        {vk}
                        {twitter}
                        {instagram}
                        {youtube}
                        {github}
                        {facebook}
                    </ContactsRow>
                </UserInfo>
            </MainBlockTop>
        )
    }
}

const MainBlockTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-top: -50px;
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  z-index: 2;
  @media ${({theme}) => theme.media.mobile} {
    padding: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`
export const Avatar = styled.div`
  position: relative;
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  margin-right: 50px;
  @media ${({theme}) => theme.media.tablet} {
    max-width: 125px;
    max-height: 125px;
    margin-right: 30px;
  }
  @media ${({theme}) => theme.media.mobileSmall} {
    max-width: 100px;
    max-height: 100px;
    margin-right: 15px;
  }
  @media (max-width: 375px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
  &:hover{
    &::before{
      opacity: .5;
    }
    label{
      pointer-events: auto;
      opacity: 1;
    }
  }
  
  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0;
    border-radius: 50%;
    transition: all .3s;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  label{
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    transition: all .3s;
  }

  svg {
    position: relative;
    display: inline-block;
    cursor: pointer;
    transition: all 0.3s;
  }

  input[type=file] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
`
const UserInfo = styled.div`
  p:not(:last-child) {
    margin-bottom: 10px;
    @media ${({theme}) => theme.media.mobileSmall} {
      margin-bottom: 7px;
    }
  }

  @media (max-width: 375px) {
    text-align: center;
  }
`

const ContactsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-top: 12px;
  }
  @media (max-width: 375px) {
    justify-content: center;
  }

  svg {
    width: 20px;
    height: 20px;
    object-fit: cover;
    transition: all .3s;
    @media ${({theme}) => theme.media.mobileSmall} {
      width: 18px;
      height: 18px;
    }

    path {
      transition: all .3s;
    }
  }

  a {
    &:hover {
      svg {
        path:first-child {
          fill: ${({theme}) => theme.colors.second}
        }
      }
    }

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`

