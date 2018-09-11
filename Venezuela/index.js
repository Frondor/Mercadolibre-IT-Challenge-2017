// reversed for simplicity
const ENTRY = [1, 4, 5, 6, 7, 8, 15, 12, 9, 4, 9, 8, 12, 14, 22, 45, 67, 89, 87, 86, 85, 23, 56, 67, 21, 88, 11, 44, 56, 91, 67, 45, 45, 45, 45, 45, 44, 21, 89, 90, 90, 87, 45, 91, 12, 45, 57].reverse();
const COLUMNS = ENTRY.length;
const ROWS = Math.max(...ENTRY);

// ROWS x COLUMNS matrix of zeros
const jumps = new Array(ROWS)
  .fill(new Array(COLUMNS).fill(0))
  // Fill with 1 the elements that need painting
  .map((row) => {
    return row.map((col, c) => {
      if (!ENTRY[c]) return col;
      col = 1;
      ENTRY[c]--;
      return col;
    });
  })
  // map the rows to the number of jumps the machine did on them
  .map((row) => {
    return row.reduce((jumps, col, c) => {
      if (col && !row[c + 1]) return jumps + 1;
      return jumps;
    }, 0);
  })
  // Sum each row's jumps and return the total
  .reduce((jumps, row) => {
    jumps = jumps + row;
    return jumps;
  }, 0);

console.log(jumps);