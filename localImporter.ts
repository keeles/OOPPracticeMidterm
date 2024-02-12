import { readFile } from "fs/promises"
import Playlist from "./playlist"

export default class LocalImporter {
    async loadPlaylist() {
        let contents = await (readFile("local.json", "utf8"))
        console.log(contents)
    }
}
