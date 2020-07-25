import {
  CHANGE_INPUT_FIELD,
  SET_IMAGE_URL,
  SET_BOX,
  SET_ROUTE,
  SIGNED_IN,
  ON_SUBMIT
} from './constants'

const initialState = {
  input:'',
  imageUrl:'',
  box :{},

}

export const inputImage = ( state = initialState, action = {}) =>{
  switch ( action.type){
    case CHANGE_INPUT_FIELD:
      return Object.assign({},state, {input:action.payload})
    case SET_IMAGE_URL:
      return Object.assign({},state, {imageUrl:action.payload})
    case SET_BOX :
<<<<<<< HEAD
        return Object.assign({},state, {box:action.payload})
    default:
=======
        return Object.assign({},state, {box:action.payload})          
    default:
    // console.log("hmmmmmmmmmmmmmmmmmmmmmmmm ",action.type);
>>>>>>> 2fa8fa56e98c761d153257729670b4e76bc1de92
    return state;
  }
}
const routeitialState = {
    route:'signIn'
}
export const route = ( state = routeitialState, action = {}) =>{
  switch ( action.type){
    case SET_ROUTE:
      return Object.assign({},state, {route:action.payload})
    default:
      return state;
    }
    }

<<<<<<< HEAD
// should be changed with real signin
=======
// will be changed
>>>>>>> 2fa8fa56e98c761d153257729670b4e76bc1de92
const signInitialState = {
    isSignedIn : false
}

export const signIn = ( state = signInitialState, action = {}) =>{
  switch ( action.type){
      case SIGNED_IN:
        return Object.assign({},state, {isSignedIn:action.payload})
      default:
      return state;
    }
    }
