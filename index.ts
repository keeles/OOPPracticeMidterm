import Artist from "./artist";
import User from "./user";
import Song from "./song";
import Album from "./album";
import Playlist from "./playlist";
// import LocalImporter from "./localImporter";
// import CloudImporter from "./CloudImporter";
import PlaylistImporter from "./playlistImporter";

const artist = new Artist("Muse");
const album = new Album("The 2nd Law", artist, 2012);
const song = new Song("Madness");

album.addTrack(song);

album.addTrack(song);

const album2 = new Album("Parachutes", new Artist("Coldplay"), 2000);
album2.addTrack(new Song("Don't Panic"));
album2.addTrack(new Song("Shiver"));
album2.addTrack(new Song("Spies"));
album2.addTrack(new Song("Sparks"));
album2.addTrack(new Song("Yellow"));
album2.addTrack(new Song("Trouble"));
album2.addTrack(new Song("Parachutes"));
album2.addTrack(new Song("High Speed"));
album2.addTrack(new Song("We never change"));
album2.addTrack(new Song("Everything's Not Lost"));

// const localPlaylistImporter = new PlaylistImporter(
//   new LocalImporter("myPlaylist.txt")
// );
// const cloudPlaylistImporter = new PlaylistImporter(
//   new CloudImporter("www.youtube.com")
// );

// const localPlaylist: Playlist = localPlaylistImporter.importPlaylist();
// const cloudPlaylist: Playlist = cloudPlaylistImporter.importPlaylist();

const user = new User("john123", "password123");


// localPlaylist.addAlbum(album);
// localPlaylist.addAlbum(album2);

// cloudPlaylist.addAlbum(album);
// cloudPlaylist.addAlbum(album2);

user.addAlbum(album);
user.addAlbum(album2);

// user.addPlaylist(localPlaylist);
// user.addPlaylist(cloudPlaylist);

console.log("Getting Playlists...");
// user.getPlaylists().forEach((pl) => console.log(pl.name));

console.log("---------------------");

console.log("Getting Albums...");
user
    .getAlbums()
    .forEach((album) => console.log(`${album.getTitle()} by ${album.getArtist()}`));

console.log("---------------------");
console.log("Getting Songs...");
user.getSongs().forEach((song) => console.log(song));

