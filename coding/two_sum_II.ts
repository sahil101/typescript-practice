const twoSum = function(numbers: number[], target: number): number[] {
    let n: number = numbers.length
    let i = 0
    let j = n- 1
    while (i < j) {
        const sum = numbers[i] + numbers[j]
        if (sum === target) return [i + 1, j + 1]
        if (sum > target) j--
        else i++
    }
    return []
}