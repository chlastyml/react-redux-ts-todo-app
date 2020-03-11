enum colorType {
  HUE = 'hsl',
  RGB = 'rgb'
}

function toHue(p1: number, p2: number, p3: number) {
  if (p1 >= 360) p1 = p1 - 360;
  if (p1 < 360) p1 = p1 + 360;
  return `hsl(${p1},${p2}%, ${p3}%)`
}

function toRgb(p1: number, p2: number, p3: number) {
  if (p1 > 255) p1 = 255;
  if (p2 > 255) p2 = 255;
  if (p3 > 255) p3 = 255;
  if (p1 < 0) p1 = 0;
  if (p2 < 0) p2 = 0;
  if (p3 < 0) p3 = 0;
  return `rbg(${p1},${p2},${p3})`
}


export class Color {
  public static TYPE = colorType;
  type: colorType;
  p1: number;
  p2: number;
  p3: number;

  constructor(type: colorType, p1: number, p2: number, p3: number) {
    this.type = type;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }

  get HUE(): string { return toHue(this.p1, this.p2, this.p3); }
  get RGB(): string { return toRgb(this.p1, this.p2, this.p3); }

  // toString(): string {
  //   if (this.type === Color.TYPE.HUE) {
  //     return toHue(this.p1, this.p2, this.p3);
  //   }
  //   if (this.type === Color.TYPE.RGB) {
  //     return toRgb(this.p1, this.p2, this.p3);
  //   }
  //   throw new Error('Unsuported type of color');
  // }

  get invert(): string {
    if(this.type === Color.TYPE.HUE){
      return toHue(this.p1 + 180, this.p2, this.p3);
    }
    throw new Error('Unsuported type of color');
  }
}