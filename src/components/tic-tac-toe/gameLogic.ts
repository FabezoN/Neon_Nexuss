export type BoardArray = Array<Array<string | null>>;

export const checkWinner = (board: BoardArray): string | null => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];
    for (const line of lines) {
        const [a, b, c] = line.map(index => ({ row: Math.floor(index / 3), col: index % 3 }));
        if (board[a.row][a.col] && board[a.row][a.col] === board[b.row][b.col] && board[a.row][a.col] === board[c.row][c.col]) {
            return board[a.row][a.col];
        }
    }
    return null;
};

export const isMovesLeft = (board: BoardArray): boolean => {
    return board.some(row => row.includes(null));
};

export const minimax = (board: BoardArray, depth: number, isMaximizing: boolean): number => {
    const winner = checkWinner(board);
    if (winner === "O") return 10 - depth;
    if (winner === "X") return depth - 10;
    if (!isMovesLeft(board)) return 0;

    let bestScore = isMaximizing ? -Infinity : Infinity;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === null) {
                board[row][col] = isMaximizing ? "O" : "X";
                const score = minimax(board, depth + 1, !isMaximizing);
                board[row][col] = null;
                bestScore = isMaximizing ? Math.max(score, bestScore) : Math.min(score, bestScore);
            }
        }
    }
    return bestScore;
};

export const findBestMove = (board: BoardArray): [number, number] => {
    let bestVal = -Infinity;
    let bestMove: [number, number] = [-1, -1];
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === null) {
                board[row][col] = "O";
                const moveVal = minimax(board, 0, false);
                board[row][col] = null;
                if (moveVal > bestVal) {
                    bestVal = moveVal;
                    bestMove = [row, col];
                }
            }
        }
    }
    return bestMove;
};
