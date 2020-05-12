import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiProdutoComponent } from './exclui-produto.component';

describe('ExcluiProdutoComponent', () => {
  let component: ExcluiProdutoComponent;
  let fixture: ComponentFixture<ExcluiProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcluiProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluiProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
