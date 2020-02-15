import axios from '../../utils/axios'
import * as types from '../types'
import { ADD_COOK } from '../types'
import { FIREBASEURL } from '../../utils/key'

export const addCook = (data, token) => {

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