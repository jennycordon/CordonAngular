import { Injectable } from '@angular/core';
import { Empleado } from './../models/empleado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoDataServiceService {

  empleados: Empleado[];

  constructor(private httpCliente: HttpClient) { }

  saveEmpleado(empleado: Empleado){
  this.httpCliente.post('http://localhost:3000/empleados', empleado).subscribe(
    response => {console.log("result: " + response) },
    error => {console.log("error " + error)}
  );
}

  getEmpleados(){
  return this.httpCliente.get('http://localhost:3000/clientes');
}

getEmpleado(id: number){
  return this.httpCliente.get('http://localhost:3000/empleados' + id);
}

updateEmpleado(id: number, empleado: Empleado){
  this.httpCliente.put('http://localhost:3000/clientes/' + id, empleado).subscribe(
    response => {console.log("result: " + response) },
    error => { console.log("error " + error)}
  );
}

deleteEmpleado(id: number){
  this.empleados.splice(id, 1);
}

}
