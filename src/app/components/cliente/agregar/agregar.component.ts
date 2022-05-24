import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from '../cliente';

@Component({
  selector: 'cliente-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient, private _snack:MatSnackBar) {
    this.form = fb.group({
      nombre: ['', Validators.required],
      nit: [''],
      direccion: [''],
      telefono: ['',],
      email: ['', [Validators.email, Validators.required]],
      observaciones: ['']
    });
  }

  submit(){

    let clienteForm:Cliente = {...this.form.value}
    
    this.http.post("http://localhost:8080/api/cliente", clienteForm)
      .subscribe({
        next: (obj) => {
          const cliente:Cliente = obj as Cliente;
          console.log(cliente);
          this._snack.open(`Cliente ${cliente.nombre} Creado Correctamente ${cliente.id}`, "OK",{duration:7000});
          this.form.reset();
        },
        error: (e) => {
          if(e.status == 409){
            this._snack.open("Error. El cliente ya existe. Confirmar si el NIT es correcto", "Cerrar")
          }
        },
        complete: () => {
          
        }
      });
  }

  ngOnInit(): void {
  }

}
