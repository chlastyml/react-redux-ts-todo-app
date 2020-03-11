import { Color } from "./Color";

let order = 0;
function getColor() {
  const numb = 3 * 15 * order++;
  const posuv = Math.ceil(numb / 360);
  return numb + (posuv * 15);
}

const moduleCache: LogModule[] = [];
export class LogModule {
  public static GetModule(name: string) : LogModule {
    const foundModule = moduleCache.find(mod => mod.name === name);
    if(!foundModule) {
      const newModule = new LogModule(name);
      moduleCache.push(newModule);
      return newModule;
    }
    return foundModule;
  }
  public static GetAllModules(): LogModule[] {
    return moduleCache;
  }

  private _name: string;
  private _color: Color;

  private constructor(name: string) {
    this._name = name;
    this._color = new Color(Color.TYPE.HUE, getColor(), 100, 50);
  }

  get name() { return this._name; }
  get color() { return this._color; }
}
