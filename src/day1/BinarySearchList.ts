export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    while (true) {
        if (low === high) return haystack[low] === needle;

        // Find difference, divide by two, add low
        const index = Math.round((high - low) / 2) + low;
        const value = haystack[index];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = low === index ? low : index - 1;
        } else if (value < needle) {
            low = high === index ? high : index + 1;
        }
    }
}
