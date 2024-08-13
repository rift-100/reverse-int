module.exports = function reverse (n) {
    const abs = Math.abs(n);
    return Number(String(abs).split('').reverse().join(''));
}
