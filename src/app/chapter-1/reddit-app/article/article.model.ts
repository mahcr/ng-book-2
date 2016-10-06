export class Article {

  constructor(public title: string, public link: string, public votes:number=0) {

  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  domain(): string {
    try {
      const link: string = this.link.split('//')[1];
      return link.split('/')[0];
    } catch(e) {
      return null;
    }
  }
}
