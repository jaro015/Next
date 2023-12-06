export const sleep = (ms, data) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, ms);
    });
}
