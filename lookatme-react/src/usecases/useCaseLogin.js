export async function useCaseLogin({ email, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'email' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    })
}