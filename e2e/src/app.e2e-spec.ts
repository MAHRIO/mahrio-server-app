import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Mahr.io!');
  });

  it('should click LED on', () => {
    page.getButtonOn().click();
    expect(page.getLED().getAttribute('class')).toMatch('active');
  });
});
