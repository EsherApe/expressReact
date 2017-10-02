const getUser = resp => {
    return {
        type: "GET_USER",
        user: resp
    }
};

const showSelectedUser = (activeTab, userId) => {
    return {
        type: "SHOW_SELECTED_USER",
        data: {
            activeTab,
            userId
        }
    }
};

export {getUser, showSelectedUser}