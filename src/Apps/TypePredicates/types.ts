export type running = {
    distance: number
    time: number
}

export type cycling = {
    distance: number
    time: number
    style: "road" | "mountain"
}

export type climbing = {
    style: "boulder" | "lead climb"
    grade: "5a" | "5b" | "5c" | "6a" | "6b" | "6c" | "7a" | "7b" | "7c" | "8a" | "8b" | "8c" | "9a" | "9b" | "9c"
}

export type sport = running | cycling | climbing
