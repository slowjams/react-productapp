export function multiActions({ dispatch, getState }) {
    //console.log("111111")
    return function receiveNext(next) {
        //console.log("22222")
        return function processAction(action) {
            console.log("33333")
            if (Array.isArray(action)) {
                action.forEach(a => next(a));
            } else {
                next(action);
            }
        }
    }
}