import { EggheadAngular2DependencyInjectionDiExplainedPage } from './app.po';

describe('egghead-angular-2-dependency-injection-di-explained App', function() {
  let page: EggheadAngular2DependencyInjectionDiExplainedPage;

  beforeEach(() => {
    page = new EggheadAngular2DependencyInjectionDiExplainedPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('egghead-angular-2-dependency-injection-di-explained works!');
  });
});
