// code your solution here
function superbowlWin(record) {
    const result = record.find(function(record) {
        return record.result === "W";
    });
    return !!result ? result.year : undefined;
}