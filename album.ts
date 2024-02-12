import Artist from "./artist";
import Song from "./song";

export default class Album {
    private _title!: string;
    private _artist!: Artist;
    private _releaseYear!: number;
    private _tracks!: Song[];

    constructor(title: string, artist: Artist, releaseYear: number) {
        this._title = title;
        this._artist = artist;
        this._releaseYear = releaseYear;
    }

    getTitle() {
        return this._title;
    }

    setTitle(name: string) {
        this._title = name;
    }

    getArtist() {
        return this._artist.getName()
    }

    addTrack(name: Song) {
        if (!this._tracks) {
            this._tracks = [name];
            return;
        }
        this._tracks.push(name);
    }

    getSongs() {
        return this._tracks.map((t) => t.getSong())
    }
}