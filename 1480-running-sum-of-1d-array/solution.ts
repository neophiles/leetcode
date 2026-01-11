// Initial Solution

function runningSum(nums: number[]): number[] {
    let runSum: number[] = [];
    let curr: number | null = null;
    let prev: number | null = null;

    for (let i = 0; i < nums.length; i++) {
        curr = nums[i];
        if (i === 0) {
            prev = curr;
        } else {
            prev = prev as number + curr;
        }
        runSum.push(prev);
    }

    return runSum;
};
