export default class Song {
    private _name!: string;

    constructor(name: string) {
        this._name = name;
    }

    getSong() {
        return this._name;
    }
}