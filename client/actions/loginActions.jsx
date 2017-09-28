const login = (resp) => {
    return {
        type: "LOG_IN",
        login: resp
    }
};

const logout = (resp) => {
    return {
        type: "LOG_OUT",
        user: resp
    }
};

export {login, logout}