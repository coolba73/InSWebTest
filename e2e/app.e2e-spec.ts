import { InSWebTest01Page } from './app.po';

describe('in-sweb-test01 App', () => {
  let page: InSWebTest01Page;

  beforeEach(() => {
    page = new InSWebTest01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
