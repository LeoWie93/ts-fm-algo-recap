import { log } from "console";
import { randomInt } from "crypto";

function twoCrystalBalls(breaks: boolean[]): number {
    // sqrt of N
    const jumpAmount: number = Math.floor(Math.sqrt(breaks.length));
    let index: number = 0;

    if (breaks[index]) {
        for (; index < breaks.length; index += jumpAmount) {
            break;
        }
    }

    index -= jumpAmount;
    log(index)

    for (let j: number = 0; j < jumpAmount && index <= breaks.length; j++, index++) {
        if (breaks[index]) {
            return index;
        }
    }

    return -1;
}


let randomIndex = randomInt(99999000, 99999999);
log("first true", randomIndex);
const breaks: boolean[] = new Array(100000000).fill(false);

for (; randomIndex < breaks.length; randomIndex++) {
    breaks[randomIndex] = true;
}

let index = twoCrystalBalls(breaks);

log("solved index", index);
