import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

  employees= [
    {'name':'Alejandro', 'position':'manager', 'email':'cosas@gmail.com'},
    {'name':'Jason', 'position':'designer','email':'cosas2@gmail.com'},
    {'name':'Jose Armando', 'position':'enginer','email':'cosas3@gmail.com'},
  ];

  model:any={}
  model2:any={}
  msg:string='';
  hideUpdate:boolean=true;

  // Añadimos nuevo empleado
  addEmplyee():void{
    this.employees.push(this.model);
    this.msg="Campo agregado";
  }

  // Borramos un empleado, preguntando si está seguro de borrarlo
  removeEmployee(i:any):void{
    let answer = confirm('¿Estas seguro de eliminar el empleado?')
    console.log(answer)
    if(answer){
      this.employees.splice(i,1);
    }
    this.msg="Campo eliminado";
  }

  myValue=0;
  // al clicar en editar, se nos muestra el formulario con los datos a modificar
  editEmployee(i:any):void{
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.myValue=i;
    this.hideUpdate=false;
  }

  // Al encontrar el empleado, se modifica y se vuelve a ocultar el formulario
  updateEmplyee():void{
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if(i==j){
        this.employees[i] = this.model2;
        this.model2={}
        this.msg="Campo actualizado";
        this.hideUpdate=true;
      }
      
    }
    
  }
  // Ventana de mensaje
  closeAlert(){
    this.msg='';
  }
}
