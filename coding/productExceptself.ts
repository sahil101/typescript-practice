const fn = function (nums: number[]): number[] {
    let size: number = nums.length
    const answer: number[] = new Array(size).fill(0)
    const prefixProd: number[] = new Array(size).fill(0)
    prefixProd[0] = nums[0];
    for(let i:number = 1; i < size; i++) {
        prefixProd[i] = prefixProd[i - 1] * nums[i]
    }
    let prod = 1;
    for(let i:number = size - 1; i >= 0; i--) {
        let finalProd = prod * (i - 1 >= 0 ? prefixProd[i - 1]: 1)
        answer[i] = finalProd;
        prod = prod * nums[i];
    }
    return answer;
};


console.log(fn([-1,1,0,-3,3]))