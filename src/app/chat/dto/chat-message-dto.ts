export class ChatMessageDto {
    author: Author;
    date: Date;
    text: string;

    constructor(author: Author, date: Date, text: string) {
        this.author = author;
        this.date = date;
        this.text = text;
    }
}

export enum Author {
    Bot = 'bot',
    User = 'user'
  }