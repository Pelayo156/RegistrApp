import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoDocentePage } from './curso-docente.page';

describe('CursoDocentePage', () => {
  let component: CursoDocentePage;
  let fixture: ComponentFixture<CursoDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
