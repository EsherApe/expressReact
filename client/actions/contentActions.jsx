const switchContent = contentName => {
    return {
        type: "SWITCH_CONTENT",
        contentName: contentName
    }
};

export {switchContent}