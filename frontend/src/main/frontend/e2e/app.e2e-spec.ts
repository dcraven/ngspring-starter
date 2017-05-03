import { NgSpringStarterPage } from './app.po';

describe('ngspringstarter App', () => {
  let page: NgSpringStarterPage;

  beforeEach(() => {
    page = new NgSpringStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
