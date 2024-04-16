import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizarComentariosPage } from './visualizar-comentarios.page';

describe('VisualizarComentariosPage', () => {
  let component: VisualizarComentariosPage;
  let fixture: ComponentFixture<VisualizarComentariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarComentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
