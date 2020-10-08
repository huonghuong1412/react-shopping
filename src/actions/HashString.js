export const hashString = (str) => {
    return (btoa(btoa(btoa(btoa(btoa(str))))));
}

export const decodeString = (str) => {
    return atob(atob(atob(atob(atob(str)))));
}