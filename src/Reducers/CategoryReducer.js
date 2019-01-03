export default function(state = {}, action){
  switch(action.type){
  case 'CATEGORY':
    return {...state};
  default:
    return state;
  }
}
