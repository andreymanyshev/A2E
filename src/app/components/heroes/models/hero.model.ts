/**
  * Hero Model
  */
export class Hero {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public birthday: Date
  ) {
    this.id = null;
  }
}
