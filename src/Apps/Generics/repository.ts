export class Repository<T> {
    private collection: T[] = []

    public push(item: T) {
        this.collection.push(item)
    }

    public get items() {
        return this.collection
    }
}
