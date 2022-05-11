import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoaderComponent } from './client-loader.component';

describe('ClientLoaderComponent', () => {
  let component: ClientLoaderComponent;
  let fixture: ComponentFixture<ClientLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
