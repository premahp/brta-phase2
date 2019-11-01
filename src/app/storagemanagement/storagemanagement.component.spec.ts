import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoragemanagementComponent } from './storagemanagement.component';

describe('StoragemanagementComponent', () => {
  let component: StoragemanagementComponent;
  let fixture: ComponentFixture<StoragemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoragemanagementComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoragemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call add method', () => {
   let a : number =10;
   let b: number=20;
   const fixture= TestBed.createComponent(StoragemanagementComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app.add(a,b)).toEqual(30);
  });

});
