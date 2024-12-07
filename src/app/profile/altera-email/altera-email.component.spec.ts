import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraEmailComponent } from './altera-email.component';

describe('AlteraEmailComponent', () => {
  let component: AlteraEmailComponent;
  let fixture: ComponentFixture<AlteraEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlteraEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlteraEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
