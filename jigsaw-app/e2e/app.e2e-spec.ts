import { JigsawAppPage } from './app.po';

describe('jigsaw-app App', () => {
  let page: JigsawAppPage;

  beforeEach(() => {
    page = new JigsawAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
