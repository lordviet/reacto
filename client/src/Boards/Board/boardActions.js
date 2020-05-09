module.exports = {
    addBoardToStorage: boardName => {   
        let boardInfo = {
            boardName,
            id: 1 + getRandomInt(),
            lists: [] // lists will be added here
        }

        if (!localStorage.getItem('boards')) {
            localStorage.setItem('boards', JSON.stringify([]));
        }

        let boards = JSON.parse(localStorage.getItem('boards'));
        boards.push(boardInfo);
        localStorage.setItem('boards', JSON.stringify(boards));
    }
}

function getRandomInt() {
    const max = Number.MAX_SAFE_INTEGER;
    return Math.floor(Math.random() * Math.floor(max));
}
