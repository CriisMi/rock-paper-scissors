function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    if (i == 0) {
        return 'Rock';
    } else if ( i == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

