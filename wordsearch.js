const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = [];
    for (let i = 0; i < letters[0].length; i++) {
        let column = '';
        for (let j = 0;j < letters.length; j++) {
            column += letters[j][i];
        }
        verticalJoin.push(column);
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for(l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch