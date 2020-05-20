import Axios from "axios"
import qs from "qs"

const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE}/`,
    withCredentials: true,
    headers: {"content-type": "application/x-www-form-urlencoded"}
})

//signup
export const signup = (user) => {
    return axios({
      method: "POST",
      url: "signup",
      data: qs.stringify(user)  
    })
    .then((response) => {
        setUser(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

//login
export const login = (user) => {
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user)
    })
    .then((response) => {
        getUser(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
} 

//setUser
export const setUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user))
    console.log("user has been SET out of local storage")
}

//getUser
export const getUser = (user) => {
    console.log("user has been GET out of local storage (just before)")
    return JSON.parse(window.localStorage.getItem("user"))
}

//logout
export const logout = (user) =>{
    window.localStorage.removeItem("user")
    console.log("user has been logged out of local storage")
}