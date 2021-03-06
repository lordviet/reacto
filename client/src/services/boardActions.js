module.exports = {
    addBoardToStorage: boardName => {
        let boardInfo = {
            boardName,
            id: 1 + getRandomInt(),
            lists: []
        }

        if (!localStorage.getItem('boards')) {
            localStorage.setItem('boards', JSON.stringify([]));
        }

        let boards = JSON.parse(localStorage.getItem('boards'));
        boards.push(boardInfo);
        localStorage.setItem('boards', JSON.stringify(boards));
    },

    addListToBoard: (listName, boardId) => {
        let list = {
            listName,
            listId: 1 + getRandomInt(),
            tasks: []
        }

        let boards = JSON.parse(localStorage.getItem('boards'));
        let lists = boards.find(b => b.id === boardId).lists;
        let existingListsLength = lists.filter(l => l.listName === listName).length;

        if (existingListsLength) {
            list.listName += ` ${existingListsLength + 1}`;
        }

        lists.push(list);
        localStorage.setItem('boards', JSON.stringify(boards));
    },

    addTaskToList: (taskName, boardId, listName) => {
        let task = {
            taskName,
            taskId: 1 + getRandomInt(),
            active: true
        }

        let boards = JSON.parse(localStorage.getItem('boards'));
        boards.find(b => b.id === boardId).lists
            .find(l => l.listName === listName).tasks.push(task);
        localStorage.setItem('boards', JSON.stringify(boards));
    },

    getListTasks: (boardId, listName) => {
        return JSON.parse(localStorage.getItem('boards'))
            .find(b => b.id === boardId).lists
            .find(l => l.listName === listName).tasks;
    }
}

function getRandomInt() {
    const max = Number.MAX_SAFE_INTEGER;
    return Math.floor(Math.random() * Math.floor(max));
}