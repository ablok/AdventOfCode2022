import lineReader from "line-reader";

let paths: { [key: string]: number } = { "": 0 };
let path: string[];

lineReader.eachLine("./day7/input.txt", (line, last) => {
    if (line.startsWith("$ cd")) {
        if (line === "$ cd /") {
            path = [""];
        } else if (line === "$ cd ..") {
            path.pop();
        } else {
            const folder = line.slice(line.lastIndexOf(" ") + 1);
            path.push(folder);
            paths[path.join("/")] = 0;
        }
    } else if (line.startsWith("$ ls")) {
    } else if (line.startsWith("dir")) {
    } else {
        const size = Number.parseInt(line.split(" ")[0]);
        for (let i = 0; i < path.length; i++) {
            const partialPath = path.slice(0, i + 1).join("/");
            paths[partialPath] = paths[partialPath] + size;
        }
    }
    if (last) {
        let total = 0;
        Object.entries(paths)
            .filter((entry) => entry[1] < 100000)
            .forEach((entry) => (total = total + entry[1]));
        console.log(total);
    }
});
