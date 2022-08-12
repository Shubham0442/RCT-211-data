

export const reducer = (initState, action) =>{

    switch (action.type){
        case "INCREMENT" : {
            return {
                ...initState,
                count : initState.count + action.payload
            }
        }
        case "DECREMENT" : {
            return {
                ...initState,
                count : initState.count - action.payload
            }
        }

        default : {return initState}
    }
}