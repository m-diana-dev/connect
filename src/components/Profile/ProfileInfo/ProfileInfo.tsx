import styled from "styled-components";
import {H1, H2} from "../../../styles/Theme.tsx";
import defaultAvatar from "../../../assets/images/users/avatar.webp";
import {ProfileInfoType} from "../../../redux/profile-reducer.ts";
import ProfileStatus from "../ProfileStatus.tsx";
import {ChangeEvent, useState} from "react";
import {Icon} from "../../common/Icon/Icon.tsx";
import {Input} from "../../common/Input/Input.tsx";
import {Controller, FieldValues, useForm} from "react-hook-form";
import {Checkbox} from "../../common/Checkbox/Checkbox.tsx";
import {Button} from "../../common/Button/Button.tsx";

export type ProfileInfoPropsType = {
    profile: ProfileInfoType | null
    status: string
    UpdateUserStatusTC: (status: string) => void
    isOwner: boolean
    savePhotoTC: (photo: File) => void
    updateProfileTC: (formData: any) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        control
    } = useForm({
        mode: "onBlur"
    })

    const onSubmitHandler = (formData: FieldValues) => {
        props.updateProfileTC(formData)
        setEditMode(false)
    }

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
        const website = props.profile.contacts.website?
            <a href={props.profile.contacts.github}>
                <Icon id={'website'} height={'20'} width={'20'} viewBox={'0 0 24 24'}/>
            </a> : undefined
        const link = props.profile.contacts.website?
            <a href={props.profile.contacts.mainLink}>
                <Icon id={'link'} height={'20'} width={'20'} viewBox={'0 0 24 24'}/>
            </a> : undefined
        return (
            <>
                {editMode ?
                    <UserInfoSettings>
                        <H2>Profile Settings</H2>
                        <ProfileForm onSubmit={handleSubmit(onSubmitHandler)}>
                            <Input {...register('fullName',
                                {required: 'required field'})} placeholder={'Full name'} defaultValue={props.profile.fullName}/>
                            {errors?.fullName &&
                                <FormError>{errors.fullName.message && errors.fullName.message.toString()}</FormError>}
                            <Input {...register('aboutMe',
                                {required: 'required field'})} placeholder={'About me'} defaultValue={props.profile.aboutMe}/>
                            {errors?.aboutMe &&
                                <FormError>{errors.aboutMe.message && errors.aboutMe.message.toString()}</FormError>}
                            <Controller
                                name="lookingForAJob"
                                control={control}
                                defaultValue={props.profile.lookingForAJob}
                                render={({field: {ref, ...rest}}) => <Checkbox {...rest}
                                                                               label={'Looking for a job?'}/>}
                            />
                            <Input {...register('lookingForAJobDescription',
                                {required: 'required field'})} placeholder={'Job description'} defaultValue={props.profile.lookingForAJobDescription}/>
                            {errors?.lookingForAJobDescription &&
                                <FormError>{errors.lookingForAJobDescription.message && errors.lookingForAJobDescription.message.toString()}</FormError>}
                            {errors?.password &&
                                <FormError>{errors.password.message && errors.password.message.toString()}</FormError>}
                            <Input {...register('contacts.github')} placeholder={'Github'} defaultValue={props.profile.contacts.github}/>
                            <Input {...register('contacts.vk')} placeholder={'VK'} defaultValue={props.profile.contacts.vk}/>
                            <Input {...register('contacts.facebook')} placeholder={'Facebook'} defaultValue={props.profile.contacts.facebook}/>
                            <Input {...register('contacts.instagram')} placeholder={'Instagram'} defaultValue={props.profile.contacts.instagram}/>
                            <Input {...register('contacts.twitter')} placeholder={'Twitter'} defaultValue={props.profile.contacts.twitter}/>
                            <Input {...register('contacts.website')} placeholder={'Website'} defaultValue={props.profile.contacts.website}/>
                            <Input {...register('contacts.youtube')} placeholder={'Youtube'} defaultValue={props.profile.contacts.youtube}/>
                            <Input {...register('contacts.mainLink')} placeholder={'Main Link'} defaultValue={props.profile.contacts.mainLink}/>
                            <Button name={'Save'}/>
                        </ProfileForm>
                    </UserInfoSettings>
                    :
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
                                {website}
                                {link}
                            </ContactsRow>
                            {props.isOwner &&
                            <UserInfoSettingsButton onClick={() => setEditMode(true)}>
                                <Icon id={'settings'} height={'30'} width={'30'} viewBox={'0 0 23 23'}/>
                            </UserInfoSettingsButton>
                            }
                        </UserInfo>
                    </MainBlockTop>
                }
            </>
        )
    }
}

const MainBlockTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
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

  &:hover {
    label {
      pointer-events: auto;
      opacity: 0.7;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  label {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s;
  }

  svg {
    position: relative;
    display: inline-block;
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

const UserInfoSettingsButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;

  &:hover {
    svg {
      transform: rotate(60deg);
    }
  }

  svg {
    transition: all .3s;
  }
`
const UserInfoSettings = styled.div`
  border: 1px solid ${({theme}) => theme.colors.border};
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
  @media ${({theme}) => theme.media.mobile} {
    padding: 15px;
  }
`
const ProfileForm = styled.form`
  width: 100%;

  input {
    &:not(:last-child) {
      margin-bottom: 20px;
      @media ${({theme}) => theme.media.mobileSmall} {
        margin-bottom: 10px;
      }
    }
  }
`

const FormError = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  color: #c40a0a;
  @media ${({theme}) => theme.media.mobileSmall} {
    margin-bottom: 10px;
  }
`

