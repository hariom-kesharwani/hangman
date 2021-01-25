import {Guessed_Keys} from '../constants'
export const addKeys =(data)=>{
    return {
        type:Guessed_Keys,
        guessed:data
    }
}