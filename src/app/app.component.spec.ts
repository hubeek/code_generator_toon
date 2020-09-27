import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have hallo ik ben toon`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.message = 'halloikbentoon';
    app.doEncoding();
    console.log(app.processedMessage);
    expect(app.processedMessage).toEqual('hloketoalibnon');
  });

  it(`should have ditiseentestberichtvoortoon in other encoding`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.message = 'ditiseentestberichtvoortoon';
    app.doOtherEncoding();
    expect(app.otherEncodedMessage).toEqual('debtoinevottronieio sscr etht ');
  });


});
