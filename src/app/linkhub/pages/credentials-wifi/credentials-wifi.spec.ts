import { ComponentFixture, TestBed } from '@angular/core/testing';

import CredentialsWifi from './credentials-wifi';

describe('CredentialsWifi', () => {
  let component: CredentialsWifi;
  let fixture: ComponentFixture<CredentialsWifi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CredentialsWifi],
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialsWifi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
