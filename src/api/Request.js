import axios from "axios";

const urlBASE = "http://localhost:5000"

const getHeader = () => ({
    headers: {
        'Content-Type': `application/json`
    }
})

export const saveUser = (user) => {
    return axios.post(`${urlBASE}/users`,user,getHeader())
}

export const getUsers = () => {
    return axios.get(`${urlBASE}/users`)
}

export const deleteUser = (userId) => {
    return axios.delete(`${urlBASE}/user/${userId}`)
}

export const userInformation = (userId) => {
    return axios.get(`${urlBASE}/user/${userId}`)
}