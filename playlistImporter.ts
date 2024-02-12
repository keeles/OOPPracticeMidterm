import IImportable from "./Importable";

export default class PlaylistImporter {
    private _importer!: IImportable

    constructor(importer: IImportable) {
        this._importer = importer
    }

    importPLaylist() { }
}