import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { EggheadAngular2DependencyInjectionDiExplainedAppComponent } from '../app/egghead-angular-2-dependency-injection-di-explained.component';

beforeEachProviders(() => [EggheadAngular2DependencyInjectionDiExplainedAppComponent]);

describe('App: EggheadAngular2DependencyInjectionDiExplained', () => {
  it('should create the app',
      inject([EggheadAngular2DependencyInjectionDiExplainedAppComponent], (app: EggheadAngular2DependencyInjectionDiExplainedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'egghead-angular-2-dependency-injection-di-explained works!\'',
      inject([EggheadAngular2DependencyInjectionDiExplainedAppComponent], (app: EggheadAngular2DependencyInjectionDiExplainedAppComponent) => {
    expect(app.title).toEqual('egghead-angular-2-dependency-injection-di-explained works!');
  }));
});
