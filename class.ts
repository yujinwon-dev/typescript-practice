class Dev {
  private name: string;

  get getName(): string {
    return this.name;
  }

  set setName(newValue: string) {
    if (newValue && newValue.length > 5) {
      throw new Error('이름이 너무 깁니다.');
    }
    this.name = newValue;
  }
}

const josh = new Dev();
// josh.name = 'Josh Bolton'; // error
// josh.name = 'Josh';  // error