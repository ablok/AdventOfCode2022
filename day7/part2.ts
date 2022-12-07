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
        const totalSpace = 70000000;
        const neededSpaceForInstall = 30000000;
        const usedSpace = paths[""];
        const neededToFree = neededSpaceForInstall - (totalSpace - usedSpace);
        const toBeDeleted = Object.entries(paths).reduce(
            (previous, current) => {
                if (current[1] > neededToFree && current[1] < previous[1]) {
                    return current;
                } else {
                    return previous;
                }
            }
        );
        console.log(toBeDeleted[1]);
    }
});
