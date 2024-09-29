import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '7846650e-e24d-4f57-91de-bd81d9965c92',
    }
});

export const connectAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get(`/users?count=${pageSize}&page=${currentPage}`)
            .then(res => res.data)
    },
    getProfile(userID: string | number) {
        return instance.get(`/profile/${userID}`)
            .then(res => res.data)
    },
    authMe() {
        return instance.get('/auth/me')
            .then(res => res.data)
    },
    followUser(userID: number) {
        return instance.post(`/follow/${userID}`)
            .then(res => res.data)
    },
    unfollowUser(userID: number) {
        return instance.delete(`/follow/${userID}`)
            .then(res => res.data)
    },
    getStatus(userID: number) {
        return instance.get(`/profile/status/${userID}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
            .then(res => res.data)
    },
    loginUser(email: string, password: string, rememberMe:boolean, captcha: string){
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logoutUser(){
        return instance.delete(`/auth/login`)
            .then(res => res.data)
    },
    savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image', photo)
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    updateProfile(data: any){
        return instance.put(`/profile`, data)
            .then(res => res.data)
    },
    getCaptcha(){
        return instance.get('/security/get-captcha-url')
    }
}