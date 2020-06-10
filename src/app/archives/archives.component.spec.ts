import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesComponent } from './archives.component';
import {MatTableModule} from '@angular/material/table';

describe('ArchivesComponent', () => {
  let component: ArchivesComponent;
  let fixture: ComponentFixture<ArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivesComponent],
      imports: [MatTableModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
