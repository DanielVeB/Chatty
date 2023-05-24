export class ChatMessageDto {
    author: Author;
    date: Date;
    text: string;
    liked: boolean;
    unliked: boolean;

    constructor(author: Author, date: Date, text: string) {
        this.author = author;
        this.date = date;
        this.text = text;
        this.liked = false;
        this.unliked = false;
    }
}

export enum Author {
    Bot = 'bot',
    User = 'user'
  }