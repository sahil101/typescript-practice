const validParantheses = function (str) {
    const strLength = str.length
    const arr = []

    for (let ch of str) {
            if (ch === '(' || ch === '[' || ch == '{' ) arr.push(ch);
            else {
                if (arr.length === 0) return false;
                const chr = arr.at(-1)
                if ((chr === '(' && ch !== ')') || (chr === '[' && ch !== ']') || (chr === '{' && ch !== '}') ) return false;

                arr.pop();
            }
    }
    return arr.length === 0
}


console.log(validParantheses("()"))
console.log(validParantheses("(]"))
console.log(validParantheses("()[]{}"))