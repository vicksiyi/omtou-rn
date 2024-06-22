/**
 * 空函数
 */
function noFunc() { }

function isValidPhoneNumber(phoneNumber: string) {
    // 正则表达式匹配中国大陆手机号码
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
}

export {
    noFunc,
    isValidPhoneNumber
};