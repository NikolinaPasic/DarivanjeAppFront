import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UcesnikPocetnaPage } from './ucesnik-pocetna.page';

describe('UcesnikPocetnaPage', () => {
  let component: UcesnikPocetnaPage;
  let fixture: ComponentFixture<UcesnikPocetnaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UcesnikPocetnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UcesnikPocetnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
