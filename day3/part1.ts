import lineReader from "line-reader";
const doubles: number[] = [];
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

lineReader.eachLine("./day3/input.txt", (line, last) => {
    const length = line.length;
    const collection1 = line.substring(0, length / 2);
    const collection2 = line.substring(length / 2, length);

    collection1.split("").find((letter) => {
        if (collection2.indexOf(letter) >= 0) {
            const letterValue = letters.indexOf(letter) + 1;
            doubles.push(letterValue);
            return true;
        }
    });

    if (last) {
        const total = doubles.reduce((previous, current) => previous + current);
        console.log(total);
    }
});
