export default prizes => {
    let totalProbability = 0, prizeRanges = [], lastEnd = 0;
    for (let item of prizes) {
        totalProbability += item.probability;
        prizeRanges.push({
            start: lastEnd,
            end: lastEnd + item.probability,
                ...item
        });
        lastEnd = prizeRanges[prizeRanges.length - 1].end;
    }
    let noPrizeProbability = 1 - totalProbability;
    if (noPrizeProbability > 0) {
        prizeRanges.unshift({
            id: "empty",
            start: 0,
            end: noPrizeProbability
        });
    }
    let randomNumber = Math.random();
    for (let item of prizeRanges) {
        if (randomNumber >= item.start && randomNumber < item.end) {
            if (item.id !== "empty") return item;
        }
    }
}