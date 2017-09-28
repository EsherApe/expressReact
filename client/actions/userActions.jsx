const getUser = (resp) => {
    return {
        type: "GET_USER",
        user: resp
    }
};

export {getUser}