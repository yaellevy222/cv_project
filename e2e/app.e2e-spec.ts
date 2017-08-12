import { CvGeneratorPage } from './app.po';

describe('cv-generator App', () => {
  let page: CvGeneratorPage;

  beforeEach(() => {
    page = new CvGeneratorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
