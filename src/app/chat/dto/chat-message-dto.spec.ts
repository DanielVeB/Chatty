import { Author, ChatMessageDto } from './chat-message-dto';

describe('ChatMessageDto', () => {
  it('should create an instance', () => {
    expect(new ChatMessageDto(Author.Bot, new Date(),'')).toBeTruthy();
  });
});
