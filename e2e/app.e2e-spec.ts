import { KaizeningenieriaPage } from './app.po';

describe('kaizeningenieria App', () => {
  let page: KaizeningenieriaPage;

  beforeEach(() => {
    page = new KaizeningenieriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
