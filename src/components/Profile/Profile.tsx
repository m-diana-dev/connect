import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer.tsx";
import {Preloader} from "../common/Preloader/Preloader.tsx";
import {ProfileInfoType} from "../../redux/profile-reducer.ts";

export type ProfilePropsType = {
    profile: ProfileInfoType | null
    status: string
    UpdateUserStatusTC: (status: string) => void
    isOwner: boolean
    savePhotoTC: (photo: File) => void
    updateProfileTC: (formData: any) => void
}
export const Profile = (props: ProfilePropsType) => {
    if (!props.profile) return <Preloader/>
    return (
        <>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         UpdateUserStatusTC={props.UpdateUserStatusTC} savePhotoTC={props.savePhotoTC} updateProfileTC={props.updateProfileTC}/>
            <MyPostsContainer/>
        </>
    )
}