import {ADD_COMMENT} from './actions';
import {REMOVE_COMMENT} from './actions';
import {EDIT_COMMENT} from './actions';
import {THUMB_UP_COMMENT} from './actions';
import {THUMB_DOWN_COMMENT} from './actions';

export function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];  //tablica komentarzy (wcześniej - ...state.comments)

        case REMOVE_COMMENT:
            return [
                state.filter(comment => comment.id !== action.id) //comments: (tabl comments przyjmuje od nowa)
            ];
        
        case EDIT_COMMENT:
            var newArr = state.map((comment)=>{
                if(comment.id !== action.id){
                    return comment;
                } else {
                    comment.text = action.text;
                    return comment;
                }
            })
            return newArr;
        
        case THUMB_UP_COMMENT:
            var newArr = state.map((comment)=>{
                if(comment.id !== action.id){
                    return comment;
                } else {
                    comment.votes = comment.votes+1;
                    return comment;
                }
            })
            return newArr;
        
        case THUMB_DOWN_COMMENT:
            var newArr = state.map((comment)=>{
                if(comment.id !== action.id){
                    return comment;
                } else {
                    comment.votes = comment.votes-1;
                    return comment;
                }
            })
            return newArr;

        default:
            return state;
    }
}