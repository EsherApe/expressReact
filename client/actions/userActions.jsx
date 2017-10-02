const getUser = resp => {
    return {
        type: "GET_USER",
        user: resp
    }
};

const showSelectedUser = userId => {
    return {
        type: "SHOW_SELECTED_USER",
        userId: userId
    }
};

export {getUser, showSelectedUser}