// code your solution here
function didWin(season) {
    return season.result === "W";
}

function superbowlWin(array) {
    let won = array.find(didWin);
    if (won === undefined) {
        return won;
    } else {
        return won.year;
    }
}
