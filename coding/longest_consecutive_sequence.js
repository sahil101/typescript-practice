const LCA = function(numbers) {
    n = numbers.length
    const set = new Set(numbers)
    let ans = 1;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let startNum = num;
            let count = 1;
            while (set.has(startNum + 1)) {
                startNum = startNum + 1;
                count = count + 1;
            }
            ans = Math.max(ans, count);
        }
    }
    return ans;
}


console.log(LCA( [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))