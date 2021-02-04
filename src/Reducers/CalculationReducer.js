//these methods are for calculator

export const calculation = (result = 0, action) => {
    switch (action.type) {
        case 'INCREASE_BY':
            return result + action.payload
        case 'DECREASE_BY':
            return result - action.payload
        default:
            return result
    }
}