import * as ActionTypes from './ActionTypes';

export const Comments = (state={
    isLoading: true,
    errMess: null,
    comments: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, isLoading: false, comments: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, errMess: null, isLoading: true, comments: []};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
            
        default:
            return state;
    }
}