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
  imageUrl:'https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528',
  box :{},

}

export const inputImage = ( state = initialState, action = {}) =>{
  switch ( action.type){
    case CHANGE_INPUT_FIELD:
      return Object.assign({},state, {input:action.payload})
    case SET_IMAGE_URL:
      return Object.assign({},state, {imageUrl:action.payload})
    case SET_BOX :
        return Object.assign({},state, {box:action.payload})
    default:
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

// should be changed with real signin
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
