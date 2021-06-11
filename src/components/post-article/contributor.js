const AUTHOR = "AUTHOR";
const EDITOR = "EDITOR";



export class Contributor {
    constructor(name) {
        this.role = AUTHOR;
        this.name = name;
    }

    setEditor() {
        this.role = EDITOR;
    }

    setAuthor() {
        this.role = AUTHOR;
    }

    toObj = () => {
        return {name: this.name, role: this.role};
    }
}

