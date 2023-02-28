export const getUserInfo = (name: string) => {
    // @ts-ignore
    const loggedInUser = JSON.parse(localStorage.getItem('userInfo'));
    return loggedInUser[name]
}