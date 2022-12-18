export class Color {
  static mix(hex1: string, hex2: string) {
    let [c1, c2] = [hex1, hex2].map((x) => this.convert(x));

    let cm: number[] = [];

    [0, 1, 2].forEach((i) => cm.push((c1![i] + c2![i]) / 2));

    return this.rgbToHex(cm);
  }

  static randomize(text: string) {
    let color = "#";
    const hash = this.hash(text);

    for (var i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 255;
      color += value.toString(16).substring(-1);
    }

    return this.mix(color.padEnd(7, "0"), "#000000");
  }

  private static componentToHex(c: number) {
    var hex = Math.floor(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  private static rgbToHex([r, g, b]: number[]) {
    return (
      "#" +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }

  private static convert(color: string) {
    return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
      .exec(color)
      ?.map((x) => parseInt("0x" + x))
      .slice(1, 4);
  }

  private static hash(text: string) {
    let hash = 0;

    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }

    return hash;
  }
}
