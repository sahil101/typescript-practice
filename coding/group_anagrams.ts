const groupAanagrams = function (strs: string[]): string[][] {
    let n: number = strs.length
    const groups: string[][] = []
    const groupMap: Record<string, string[]> = {}
    // O(N) * O(NLog(N))
    for (let str of strs) {
        const strCopy = str.split("").sort().join("")
        if (!groupMap[strCopy]) {
            groupMap[strCopy] = []
        }
        groupMap[strCopy].push(str)
    }
    for (let key of Object.keys(groupMap)) {
        groups.push(groupMap[key])
    }
    return groups
}

console.log(groupAanagrams(["eat","tea","tan","ate","nat","bat"]))