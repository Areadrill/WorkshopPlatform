import { WorkshopPlatformPage } from './app.po';

describe('workshop-platform App', () => {
  let page: WorkshopPlatformPage;

  beforeEach(() => {
    page = new WorkshopPlatformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
