export const posts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}

export const user = (users = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...users, action.payload]
        default:
            return users
    }
}