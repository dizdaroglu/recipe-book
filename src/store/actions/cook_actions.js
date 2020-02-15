import axios from '../../utils/axios'
import * as types from '../types'
import { ADD_COOK } from '../types'
import { FIREBASEURL } from '../../utils/key'


export const getCook = (category) => {
    let URL = `${FIREBASEURL}/cook.json`;

    if (category !== "All") {
        URL = `${URL}/?orderBy=\"category\"&equalTo=\"${category}\"`
    }
    const request = axios.get(URL)
        .then(res => {
            console.log("data,: ", res.data)
            const cook = [];
            for (let key in res.data) {
                cook.push({
                    ...res.data[key],
                    id: key
                })
            }
            return cook
        })
        .catch(error => {
            return false
        })
    return {
        type: types.GET_COOK,
        payload: request
    }
}
export const addCook = (data, token) => {
    console.log("data: ", data)

    const request = axios.post(`/cook.json?auth=${token}`, data)
        .then(res => {
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: types.ADD_COOK,
        payload: request
    }
}

export const resetCook = () => {
    return {
        type: types.RESET_COOK,
        payload: ""
    }
}