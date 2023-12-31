import styled from "styled-components";
import {H1} from "../../../styles/Theme.tsx";
import defaultAvatar from "../../../images/users/avatar.webp";
import {ProfileInfoType} from "../../../redux/profile-reducer.ts";
import ProfileStatus from "../ProfileStatus.tsx";

export type ProfileInfoPropsType = {
    profile: ProfileInfoType | null
    status: string
    UpdateUserStatusTC: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (props.profile) {
        const img = props.profile.photos.large ? props.profile.photos.large : defaultAvatar
        const facebook = props.profile.contacts.facebook ?
            <a href={props.profile.contacts.facebook}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M40 20.1213C40 9.008 31.0467 0 20 0C8.95333 0 0 9.008 0 20.1213C0 30.1667 7.312 38.4907 16.8747 40V25.9387H11.7973V20.12H16.8747V15.688C16.8747 10.6453 19.86 7.85867 24.4293 7.85867C26.616 7.85867 28.9067 8.252 28.9067 8.252V13.204H26.3827C23.8987 13.204 23.1253 14.756 23.1253 16.348V20.1213H28.672L27.7853 25.9373H23.1253V40C32.688 38.4907 40 30.1667 40 20.1213Z"
                        fill="black"/>
                </svg>
            </a> : undefined
        const vk = props.profile.contacts.vk ?
            <a href={props.profile.contacts.vk}>
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_201_1404)">
                        <path
                            d="M0.589844 25.3272C0.589844 13.3878 0.589844 7.41816 4.29892 3.70908C8.00801 0 13.9776 0 25.917 0H28.0276C39.967 0 45.9366 0 49.6458 3.70908C53.3548 7.41816 53.3548 13.3878 53.3548 25.3272V27.4378C53.3548 39.3772 53.3548 45.3468 49.6458 49.0559C45.9366 52.765 39.967 52.765 28.0276 52.765H25.917C13.9776 52.765 8.00801 52.765 4.29892 49.0559C0.589844 45.3468 0.589844 39.3772 0.589844 27.4378V25.3272Z"
                            fill="black"/>
                        <path
                            d="M28.5746 37.9908C16.3157 37.9908 9.32359 29.672 9.03224 15.8295H15.1729C15.3746 25.9895 19.9015 30.2931 23.4873 31.1805V15.8295H29.2696V24.592C32.8105 24.2148 36.5303 20.2218 37.7854 15.8295H43.5675C42.6039 21.2423 38.5699 25.2353 35.7012 26.8769C38.5699 28.2079 43.1644 31.6907 44.9124 37.9908H38.5474C37.1804 33.7759 33.7742 30.5149 29.2696 30.0713V37.9908H28.5746Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_201_1404">
                            <rect width="52.765" height="52.765" fill="white" transform="translate(0.589844)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a> : undefined
        const twitter = props.profile.contacts.twitter ?
            <a href={props.profile.contacts.twitter}>
                <svg width="52" height="54" viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0.0390684 53.75H4.571L22.308 33.1886L36.4117 53.75H52L30.9812 23.2584L50.281 0.75H45.6709L28.9106 20.221L15.4711 0.75H0L20.3156 30.268L0.0390684 53.75ZM6.25094 4.21583H13.2442L45.71 50.4789H38.6386L6.25094 4.21583Z"
                          fill="black"/>
                </svg>
            </a> : undefined
        const instagram = props.profile.contacts.instagram ?
            <a href={props.profile.contacts.instagram}>
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_201_1405)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M15.8605 0.158295C18.6738 0.0287808 19.5708 0 26.7373 0C33.9037 0 34.8007 0.0311793 37.6117 0.158295C40.4226 0.285411 42.3413 0.733913 44.0202 1.38388C45.7782 2.04824 47.3732 3.08675 48.6923 4.42986C50.0354 5.74659 51.0715 7.33913 51.7335 9.09956C52.3859 10.7784 52.832 12.6972 52.9615 15.5033C53.091 18.3214 53.1198 19.2184 53.1198 26.3825C53.1198 33.5489 53.0886 34.4459 52.9615 37.2593C52.8344 40.0654 52.3859 41.9841 51.7335 43.663C51.0715 45.4237 50.0337 47.0189 48.6923 48.3375C47.3732 49.6806 45.7782 50.7167 44.0202 51.3787C42.3413 52.0311 40.4226 52.4772 37.6165 52.6067C34.8007 52.7362 33.9037 52.765 26.7373 52.765C19.5708 52.765 18.6738 52.7338 15.8605 52.6067C13.0544 52.4796 11.1356 52.0311 9.45676 51.3787C7.69613 50.7166 6.10095 49.6788 4.78226 48.3375C3.44006 47.02 2.40139 45.4256 1.73868 43.6654C1.08871 41.9865 0.642606 40.0678 0.513092 37.2617C0.383578 34.4435 0.354797 33.5465 0.354797 26.3825C0.354797 19.216 0.385977 18.319 0.513092 15.5081C0.640208 12.6972 1.08871 10.7784 1.73868 9.09956C2.40237 7.33932 3.44183 5.74494 4.78466 4.42746C6.10148 3.08555 7.69506 2.04691 9.45436 1.38388C11.1332 0.733913 13.052 0.287809 15.8581 0.158295H15.8605ZM37.3982 4.90714C34.6161 4.78003 33.7814 4.75364 26.7373 4.75364C19.6932 4.75364 18.8585 4.78003 16.0764 4.90714C13.5029 5.02466 12.107 5.45398 11.1764 5.81614C9.94603 6.29582 9.06582 6.86424 8.14243 7.78763C7.26712 8.63919 6.59349 9.67585 6.17094 10.8216C5.80878 11.7522 5.37946 13.1481 5.26194 15.7216C5.13482 18.5037 5.10844 19.3384 5.10844 26.3825C5.10844 33.4266 5.13482 34.2613 5.26194 37.0434C5.37946 39.6169 5.80878 41.0128 6.17094 41.9434C6.59306 43.0874 7.26701 44.1259 8.14243 44.9773C8.99386 45.8528 10.0324 46.5267 11.1764 46.9488C12.107 47.311 13.5029 47.7403 16.0764 47.8578C18.8585 47.985 19.6908 48.0113 26.7373 48.0113C33.7838 48.0113 34.6161 47.985 37.3982 47.8578C39.9717 47.7403 41.3676 47.311 42.2982 46.9488C43.5285 46.4692 44.4088 45.9007 45.3321 44.9773C46.2076 44.1259 46.8815 43.0874 47.3036 41.9434C47.6658 41.0128 48.0951 39.6169 48.2126 37.0434C48.3397 34.2613 48.3661 33.4266 48.3661 26.3825C48.3661 19.3384 48.3397 18.5037 48.2126 15.7216C48.0951 13.1481 47.6658 11.7522 47.3036 10.8216C46.824 9.59123 46.2555 8.71102 45.3321 7.78763C44.4805 6.91238 43.4439 6.23876 42.2982 5.81614C41.3676 5.45398 39.9717 5.02466 37.3982 4.90714ZM23.3675 34.5155C25.2495 35.2989 27.345 35.4046 29.2962 34.8146C31.2474 34.2246 32.9333 32.9755 34.0659 31.2806C35.1985 29.5857 35.7075 27.5502 35.506 25.5217C35.3045 23.4932 34.405 21.5976 32.9612 20.1586C32.0407 19.2388 30.9278 18.5344 29.7025 18.0963C28.4772 17.6582 27.17 17.4973 25.875 17.625C24.5801 17.7527 23.3295 18.166 22.2134 18.835C21.0973 19.5041 20.1434 20.4122 19.4205 21.4942C18.6975 22.5761 18.2234 23.8049 18.0323 25.0921C17.8412 26.3792 17.9379 27.6927 18.3154 28.938C18.6929 30.1833 19.3417 31.3295 20.2153 32.2939C21.0889 33.2583 22.1655 34.0171 23.3675 34.5155ZM17.1484 16.7937C18.4077 15.5344 19.9026 14.5356 21.5478 13.8541C23.1931 13.1726 24.9565 12.8218 26.7373 12.8218C28.5181 12.8218 30.2815 13.1726 31.9267 13.8541C33.572 14.5356 35.0669 15.5344 36.3261 16.7937C37.5853 18.0529 38.5842 19.5478 39.2657 21.193C39.9472 22.8383 40.2979 24.6017 40.2979 26.3825C40.2979 28.1633 39.9472 29.9267 39.2657 31.5719C38.5842 33.2172 37.5853 34.7121 36.3261 35.9713C33.783 38.5144 30.3338 39.9431 26.7373 39.9431C23.1408 39.9431 19.6916 38.5144 17.1484 35.9713C14.6053 33.4282 13.1766 29.979 13.1766 26.3825C13.1766 22.786 14.6053 19.3368 17.1484 16.7937ZM43.3055 14.8413C43.6175 14.547 43.8673 14.193 44.0401 13.8004C44.2129 13.4077 44.3052 12.9844 44.3114 12.5555C44.3177 12.1266 44.2378 11.7007 44.0765 11.3032C43.9153 10.9057 43.6759 10.5446 43.3726 10.2413C43.0692 9.93797 42.7081 9.69858 42.3106 9.53731C41.9131 9.37604 41.4873 9.29617 41.0583 9.30242C40.6294 9.30868 40.2061 9.40093 39.8135 9.57372C39.4208 9.7465 39.0669 9.99631 38.7725 10.3084C38.2 10.9152 37.8866 11.7213 37.8988 12.5555C37.9109 13.3897 38.2477 14.1863 38.8376 14.7762C39.4276 15.3661 40.2242 15.7029 41.0583 15.7151C41.8925 15.7272 42.6986 15.4138 43.3055 14.8413Z"
                              fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_201_1405">
                            <rect width="52.765" height="52.765" fill="white" transform="translate(0.354797)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a> : undefined
        const youtube = props.profile.contacts.youtube ?
            <a href={props.profile.contacts.youtube}>
                <svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_201_1403)">
                        <path d="M21.9309 34.0746V18.6903L35.6498 26.3825L21.9309 34.0746Z" fill="white"/>
                        <path
                            d="M52.4767 14.0441C52.1764 12.9604 51.5885 11.9724 50.7716 11.1789C49.9548 10.3853 48.9378 9.81415 47.8223 9.52246C43.7144 8.4424 27.2074 8.4424 27.2074 8.4424C27.2074 8.4424 10.7004 8.4424 6.59246 9.52246C5.47699 9.81415 4.45995 10.3853 3.64312 11.1789C2.82629 11.9724 2.23833 12.9604 1.93808 14.0441C1.17104 18.1141 0.798821 22.245 0.826308 26.3825C0.798821 30.52 1.17104 34.6509 1.93808 38.7209C2.23833 39.8045 2.82629 40.7926 3.64312 41.5861C4.45995 42.3796 5.47699 42.9508 6.59246 43.2425C10.7004 44.3226 27.2074 44.3226 27.2074 44.3226C27.2074 44.3226 43.7144 44.3226 47.8223 43.2425C48.9378 42.9508 49.9548 42.3796 50.7716 41.5861C51.5885 40.7926 52.1764 39.8045 52.4767 38.7209C53.2437 34.6509 53.6159 30.52 53.5884 26.3825C53.6159 22.245 53.2437 18.1141 52.4767 14.0441ZM21.9312 34.0711V18.6939L35.6305 26.3825L21.9312 34.0711Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_201_1403">
                            <rect width="52.765" height="52.765" fill="white" transform="translate(0.82489)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a> : undefined
        const github = props.profile.contacts.github ?
            <a href={props.profile.contacts.github}>
                <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_201_1397)">
                        <path
                            d="M17.7272 42.6755C17.7272 42.8947 17.4815 43.0701 17.1716 43.0701C16.819 43.1029 16.5732 42.9276 16.5732 42.6755C16.5732 42.4563 16.819 42.281 17.1288 42.281C17.4494 42.2481 17.7272 42.4235 17.7272 42.6755ZM14.404 42.1824C14.3292 42.4015 14.5429 42.6536 14.8635 42.7194C15.1413 42.8289 15.4619 42.7194 15.526 42.5002C15.5901 42.281 15.3871 42.0289 15.0665 41.9303C14.7887 41.8536 14.4788 41.9632 14.404 42.1824ZM19.127 41.996C18.8171 42.0728 18.6034 42.281 18.6355 42.5331C18.6675 42.7522 18.9454 42.8947 19.2659 42.818C19.5758 42.7413 19.7895 42.5331 19.7575 42.3139C19.7254 42.1056 19.4369 41.9632 19.127 41.996ZM26.1581 0C11.3373 0 0 11.5401 0 26.7407C0 38.8946 7.45847 49.2949 18.1119 52.9553C19.4796 53.2074 19.9605 52.3416 19.9605 51.6293C19.9605 50.9498 19.9284 47.2017 19.9284 44.9003C19.9284 44.9003 12.4486 46.5442 10.8778 41.6344C10.8778 41.6344 9.65968 38.4452 7.90726 37.6233C7.90726 37.6233 5.46028 35.9027 8.07823 35.9356C8.07823 35.9356 10.7389 36.1547 12.2028 38.7631C14.5429 42.9933 18.4645 41.7769 19.9925 41.0535C20.2383 39.3001 20.9329 38.0836 21.7022 37.3603C15.729 36.6808 9.70242 35.7931 9.70242 25.2502C9.70242 22.2364 10.5145 20.724 12.2242 18.7952C11.9464 18.0828 11.0381 15.1458 12.502 11.3538C14.7353 10.6415 19.875 14.3128 19.875 14.3128C22.0121 13.6991 24.3095 13.3813 26.5855 13.3813C28.8615 13.3813 31.1589 13.6991 33.296 14.3128C33.296 14.3128 38.4357 10.6305 40.669 11.3538C42.1329 15.1567 41.2246 18.0828 40.9468 18.7952C42.6565 20.735 43.7036 22.2474 43.7036 25.2502C43.7036 35.826 37.4099 36.6698 31.4367 37.3603C32.4198 38.226 33.2532 39.8699 33.2532 42.4454C33.2532 46.1387 33.2212 50.7087 33.2212 51.6074C33.2212 52.3197 33.7127 53.1855 35.0698 52.9334C45.7552 49.2949 53 38.8946 53 26.7407C53 11.5401 40.9788 0 26.1581 0ZM10.3863 37.7986C10.2474 37.9082 10.2794 38.1603 10.4611 38.3685C10.6321 38.5439 10.8778 38.6206 11.0167 38.4781C11.1556 38.3685 11.1236 38.1165 10.9419 37.9082C10.771 37.7329 10.5252 37.6562 10.3863 37.7986ZM9.23226 36.9109C9.15746 37.0534 9.26431 37.2287 9.47802 37.3383C9.64899 37.4479 9.8627 37.4151 9.9375 37.2616C10.0123 37.1192 9.90544 36.9438 9.69173 36.8342C9.47802 36.7685 9.30706 36.8013 9.23226 36.9109ZM12.6944 40.8124C12.5234 40.9549 12.5875 41.2837 12.8333 41.4919C13.079 41.744 13.3889 41.7769 13.5278 41.6015C13.6667 41.459 13.6026 41.1303 13.3889 40.922C13.1538 40.67 12.8333 40.6371 12.6944 40.8124ZM11.4762 39.2014C11.3052 39.311 11.3052 39.596 11.4762 39.848C11.6472 40.1001 11.9357 40.2097 12.0746 40.1001C12.2456 39.9576 12.2456 39.6727 12.0746 39.4206C11.925 39.1685 11.6472 39.059 11.4762 39.2014Z"
                            fill="black"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_201_1397">
                            <rect width="53" height="53" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </a> : undefined
        return (
            <MainBlockTop>
                <Avatar>
                    <img
                        src={img} alt="avatar"/>
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

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`
const UserInfo = styled.div`
  p:not(:last-child){
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

