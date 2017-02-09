export const fetchErrorHandler = response => {
    if (!response.ok) {
        throw Error(response.statusText || 'Some error occurred.');
    }
    return response;
};
