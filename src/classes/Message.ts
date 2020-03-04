const timestampRegex = new RegExp('([0-9]{2}|[0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]\.[0-9]{3}');
const levelRegex = new RegExp('(DEBUG|INFO|WARN|ERROR)');
const messageStartRegex = new RegExp(`^${timestampRegex.source} ${levelRegex.source}`);

export function isMessageStart(line: string) {
    return messageStartRegex.test(line);
}

function parseModuls(line: string): { moduls: string[], text: string } {
    const moduls = [];

    let text = line.trim();
    while (true) {
        const resolve = parseModul(text);
        if (!resolve) {
            text = text.trim();
            text = text[0] === ':' ? text.substr(1).trim() : text;
            break;
        }
        moduls.push(resolve);
        text = text.substr(resolve.length + 2).trim();
    }

    return { moduls, text };
}

function parseModul(line: string) {
    const text = line.trim();
    if (text[0] === '[') {
        const modul = [];
        for (let i = 1; true; i++) {
            if (i > text.length - 1) return;
            if (text[i] === ']') {
                return modul.join('');
            } else {
                modul.push(text[i]);
            }
        }
    }
}

export class Message {
    private _rawMessage: string;
    private _timestamp: string;
    private _level: string;
    private _moduls: string[];
    private _text: string;

    constructor(startLine: string) {
        this._rawMessage = startLine;
        // TIMESTAMP
        const time = startLine.match(timestampRegex)[0];
        this._timestamp = time;

        // LEVEL
        const level = startLine.match(levelRegex)[0];
        this._level = level;

        // Text
        const lenght = time.length + level.length + 2; // + 2 spaces
        const text = startLine.substr(lenght);

        const result = parseModuls(text);
        this._moduls = result.moduls;
        this._text = result.text;
    }

    get timestamp() { return this._timestamp; }
    get level() { return this._level }
    get moduls() { return this._moduls; }
    get text() { return this._text; }
    get shortText() { return this._text.split('\n')[0]; }

    public TextAppend(newLine: string) {
        this._text = this._text + '\n' + newLine;
        this._rawMessage = this._rawMessage + '\n' + newLine;
    }

    public toString() {
        const moduls = this._moduls.length > 0 ? `[${this._moduls.join('] [')}]:` : '';
        return `${this._timestamp} ${this._level} ${moduls} ${this._text.split('\n')[0]}`;
    }
}
