import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoDataServiceService } from './../../services/empleado-data-service.service';
//angular
//import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  constructor(private  router: Router,
              private service: EmpleadoDataServiceService,
              private route: ActivatedRoute) { }

    codigoEmpleado: string;
    idEmpleado: number;
    nombreEmpleado: string;
    salarioEmpleado: number;
    idParam: number;

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.has('id')){
      this.idParam = +this.route.snapshot.paramMap.get('id');

      if (this.idParam != null){
        console.log(this.idParam);
        this.service.getEmpleado(this.idParam).subscribe(
          (empleados: Empleado[]) => {
            console.log(empleados[0]);
            this.codigoEmpleado = empleados[0].codigo;
            this.idEmpleado = empleados[0].id;
            this.nombreEmpleado = empleados[0].nombre;
            this.salarioEmpleado = empleados[0].salario;
          }
        );
      }
    }
  }

  // para el boton de guardar en el formulario
  ngOnGuardar(): void {
    const empleado = new Empleado(this.codigoEmpleado, this.idEmpleado, this.nombreEmpleado, this.salarioEmpleado);
    if (this.idEmpleado != null) {
      this.service.updateEmpleado(this.idEmpleado, empleado);
    }else{
      this.service.saveEmpleado(empleado);
    }
    this.router.navigate(['empleados']);
  }

  // para el boton de eliminar en el formulario
  ngOnEliminar(): void {
    this.router.navigate(['empleados']);
  }
  // para el boton de cancelar en el formulario
  ngOnCancelar(): void {
    this.router.navigate(['empleados']);
  }

}
