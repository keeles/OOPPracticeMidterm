import Song from "./song";

export default class Playlist {
    private _name!: string;
    private _songList!: Song[];

    constructor(name: string) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }

    getSongs() {
        return this._songList;
    }

    setSongs(songList: Song[]) {
        this._songList = songList;
    }
}