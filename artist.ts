import Album from "./album";

export default class Artist {
    private _name!: string;
    private _albums!: Album[]

    constructor(name: string) {
        this._name = name;
    }

    addAlbum(album: Album) {
        this._albums.push(album)
    }

    getName() {
        return this._name;
    }
}