import { AsyncStorage } from 'react-native'



export const getToken = (cb) => {
    AsyncStorage.multiGet([
        '@recipeApp@token',
        '@recipeApp@refreshToken',
        '@recipeApp@expireToken',
        '@recipeApp@uid',
    ]).then(value => {
        cb(value)
    })
}
export const setTokens = (values, cb) => {
    console.log("Values", values)
    const dateNow = new Date();
    const expiration = dateNow.getTime() + (1 * 1000);

    AsyncStorage.multiSet([
        ['@recipeApp@token', values.token],
        ['@recipeApp@refreshToken', values.refToken],
        ['@recipeApp@expireToken', expiration.toString()],
        ['@recipeApp@uid', values.uid],
    ]).then(res => {
        cb();
    })

}