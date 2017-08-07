import { HaikuPage } from './app.po';

describe('haiku App', () => {
  let page: HaikuPage;

  beforeEach(() => {
    page = new HaikuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
