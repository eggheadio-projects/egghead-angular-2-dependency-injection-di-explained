export class EggheadAngular2DependencyInjectionDiExplainedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('egghead-angular-2-dependency-injection-di-explained-app h1')).getText();
  }
}
