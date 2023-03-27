import {sport, climbing, cycling, running} from "./types";
import {isClimbing, isCycling} from "@/Apps/Generics/types";

interface IStringable {
    get text(): string
}

class Running implements IStringable {
    constructor(private data: running) {}

    public get text() {
        return `I run ${this.data.distance} km in ${this.data.time} minutes`
    }
}

class Cycling implements IStringable {
    constructor(private data: cycling) {}

    public get text() {
        return `I ${this.data.style}-bike ${this.data.distance} km in ${this.data.time} hours`
    }
}

class Climbing implements IStringable {
    constructor(private data: climbing) {}

    public get text() {
        return `I ${this.data.style} ${this.data.grade}`
    }
}

export const getAchievementClass = (activity : sport) => {
    if (isCycling(activity)) return new Cycling(activity)
    if (isClimbing(activity)) return new Climbing(activity)
    return new Running(activity)
}
