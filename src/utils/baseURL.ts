export const baseURL = 'http://localhost:5000/api'

export const getBaseURL = (path: string = '') => {
    return baseURL + path;
}
