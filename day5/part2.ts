import lineReader from "line-reader";

const grid: string[][] = new Array(9);
for (let i = 0; i < grid.length; i++) {
    grid[i] = [];
}

lineReader.eachLine("./day5/input.txt", (line, last) => {
    if (line.startsWith("[")) {
        line.match(/.{1,4}/g)!.forEach((crate, index) => {
            const letter = crate.substring(1, 2);
            if (letter !== " ") {
                grid[index].push(letter);
            }
        });
    }

    if (!line) {
        for (let column of grid) {
            column.reverse();
        }
    }

    if (line.startsWith("move")) {
        const words = line.split(" ");
        const count = Number.parseInt(words[1]);
        const fromIndex = Number.parseInt(words[3]) - 1;
        const toIndex = Number.parseInt(words[5]) - 1;
        const column = grid[fromIndex];
        const splice = column.splice(column.length - count, count);
        grid[toIndex].push(...splice);
    }

    if (last) {
        let result = "";
        for (let column of grid) {
            result = result + column.pop();
        }
        console.log(result);
    }
});
