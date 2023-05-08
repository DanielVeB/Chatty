import { ResizableTextAreaDirective } from './resizable.textarea.directive';

describe('ResizableTextareaDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {
      nativeElement: {
        value: '',
        rows: 1,
      },
    };
    const directive = new ResizableTextAreaDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
