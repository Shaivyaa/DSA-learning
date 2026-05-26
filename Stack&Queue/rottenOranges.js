let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];

function rottenOranges(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [];

  //  first add all rotten oranges in queue
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMin = 0;

  //  mark adj nodes as rotten and push in queue till it's not empty
  while (queue.length) {
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);
    console.log("---------");

    let [x, y, level] = queue.shift();
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    maxMin = Math.max(level, maxMin);
  }

  //  finally run over each element and check if any fresh is remaining
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxMin;
}

let res = rottenOranges(grid);
console.log(res);
