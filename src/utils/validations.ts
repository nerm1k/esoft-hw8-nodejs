export function isValidUser(name?: string, email?: string, age?: number): boolean {
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (name) {
        if (name.length < 1 || name.length > 32 || !nameRegex.test(name)) {
            return false;
        }
    }

    if (email) {
        if (!emailRegex.test(email)) {
            return false;
        }
    }

    if (age) {
        if (!Number.isInteger(age) || age < 1) {
            return false;
        }
    }

    return true;
}