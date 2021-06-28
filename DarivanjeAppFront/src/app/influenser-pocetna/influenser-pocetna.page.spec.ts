import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfluenserPocetnaPage } from './influenser-pocetna.page';

describe('InfluenserPocetnaPage', () => {
  let component: InfluenserPocetnaPage;
  let fixture: ComponentFixture<InfluenserPocetnaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluenserPocetnaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfluenserPocetnaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
