export class Recipe {
  public name: string;
  public dedcription: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.dedcription = desc;
    this.imagePath = imagePath;
  }
}

