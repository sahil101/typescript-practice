const calculateKDiffPairs = (nums, k) => {
    const numSet = new Set(nums)
    let count = 0
    
    for (const num of numSet) {
        if (numSet.has(num + k)) {
            count++
        }
    }
    return count
}
// how do we handle when k == 0
// we can use a frequency map to count the occurrences of each number
// and then count how many numbers appear more than once

const calculateKDiffPairsWithZero = (nums, k) => {
    if (k < 0) return 0 // k cannot be negative
    
    const numSet = new Set(nums)
    let count = 0
    
    if (k === 0) {
        const frequencyMap = {}
        for (const num of nums) {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1
        }               
        for (const num in frequencyMap) {
            if (frequencyMap[num] > 1) {
                count++
            }
        }
    } else {
        for (const num of numSet) {
            if (numSet.has(num + k)) {
                count++
            }
        }
    }
    
    return count
}

// Example usage:
const nums = [3, 1, 4, 1, 5]
const k = 2
console.log(calculateKDiffPairsWithZero(nums, k)) // Output: 2 (pairs are (1, 3) and (3, 5))
