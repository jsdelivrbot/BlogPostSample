import { GET_ANSWER , POST_QUESTION} from "../actions/index";
import _ from 'lodash';

export default function(state={},action){
    console.log("action ", {conversation: action.payload});
    switch(action.type){
        case GET_ANSWER:
        return [action.payload, ...state];
        case POST_QUESTION:
        return [action.payload, ...state];
        default:
        return state;

    }
}