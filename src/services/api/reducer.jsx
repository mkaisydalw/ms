//@flow
function rootReducer(state: Object = {}, action: Object) {
    switch (action.type) {
        case 'REQUEST_DATA':
            return {
                ...state,
                isLoaded: false,
            }
        case 'RECEIVE_DATA':
            return {
                ...state,
                isLoaded: true,
                ...action.data,
            }
        default:
            return state
    }
}

export default rootReducer;