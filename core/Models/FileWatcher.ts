export { FileWatcher };

/**
 * Class that checks for changes to a file
 */
class FileWatcher {
    private filePath: string;


    constructor(filePath: string) {
        console.log("Constructing FileWatcher");
        this.filePath = filePath;
    }


    public getPath() {
        return this.filePath;
    }
}