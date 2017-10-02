const login = (resp) => {
    return {
        type: "LOG_IN",
        login: resp
    }
};

const logout = (resp) => {
    return {
        type: "LOG_OUT",
        login: resp
    }
};

export {login, logout}