// Initial Solution

function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for (let i = 0; i < accounts.length; i++) {
        let totalWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            totalWealth += accounts[i][j];
        }
        if (totalWealth > maxWealth) {
            maxWealth = totalWealth;
        }
    }

    return maxWealth;
};
