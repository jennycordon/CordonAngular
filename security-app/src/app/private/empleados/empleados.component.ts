// import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from './../../services/empleado.service';
import { EmpleadoDataServiceService } from './../../services/empleado-data-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

// angular
import { AfterViewInit, Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EmpleadosDataSource } from './empleados-datasource';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private empleadoService: EmpleadosService) { }

  empleados: Empleado[];
  columnsToDisplay = ['Id', 'Codigo', 'Nombre', 'Salario'];
  ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      }
    );
  }

}






/*
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  //constructor(private empleadoService: EmpleadosService) { }
    constructor(private empleadoService: EmpleadosService,
    //private router: Router, // para el onAgregar
    private service: EmpleadoDataServiceService
    ) { }

  empleados: Empleado[]=[];

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(
      (empleados: Empleado[]) => {
        this.empleados = empleados;
      }
    );
  }

  /*ngOnInit(): void {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        this.empleados = res;
      }
    );
  }*/
  /*onAgregar(){
    this.router.navigate(['clientes/add']);
   }*/
/*
}*/
