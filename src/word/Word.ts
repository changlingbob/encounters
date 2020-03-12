class Word {
  private words: string;
  public weight: number;

  constructor(words: string, weight: number = 1) {
    this.words = words;
    this.weight = weight;
  }

  public generate = (): string => {
    return this.words;
  }
}

export default Word;