export const currentYear = new Date().getFullYear();

export const textLimiter = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
}

export const toastDefaultTimeoutInMS = 5000;