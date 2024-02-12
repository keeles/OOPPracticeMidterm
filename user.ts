import Album from "./album";
import Playlist from "./playlist";
import Song from "./song";

export default class User {
    private _username!: string;
    private _password!: string;
    private _playlists!: Playlist[];
    private _albums!: Album[];

    constructor(name: string, password: string) {
        this._username = name;
        this._password = password
    }

    addPlaylists(newPlaylist: Playlist) {
        this._playlists.push(newPlaylist)
    }

    addAlbum(album: Album) {
        if (!this._albums) {
            this._albums = [album]
            return;
        }
        this._albums.push(album)
    }

    getPlaylists() {
        return this._playlists
    }

    getAlbums() {
        return this._albums
    }

    getSongs() {
        let songList: string[] = [];
        for (const album of this._albums) {
            album.getSongs().map((song) => songList.push(song))
        }
        return songList;
    }
}