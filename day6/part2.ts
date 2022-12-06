import { readFileSync } from "fs";

const datastream = readFileSync("./day6/input.txt", { encoding: "utf-8" });

for (let i = 0; i < datastream.length - 14; i++) {
    const datastreamPart = datastream.substring(i, i + 14);
    let isMarker = false;
    for (let j = 0; j < datastreamPart.length; j++) {
        if (datastreamPart.split(datastreamPart[j]).length > 2) {
            isMarker = true;
            break;
        }
    }
    if (!isMarker) {
        console.log(i + 14);
        break;
    }
}
