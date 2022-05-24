import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  authLoading:boolean = false;

  constructor( private fb: FormBuilder, private snackbar: MatSnackBar, private router:Router ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contra: ['', Validators.required]
    });
  }

  ingresar(){
    console.log(this.form.value);

    if(this.form.value.usuario == 'test' && this.form.value.contra == 'test'){

      this.authLoading = true;
      setTimeout(() => {

        //this.authLoading = false;
        this.router.navigate(['home']);

      },3000);

    } else {

      //mostrar snackbar
      this.snackbar.open("Usuario o Contraseña incorrectos", "OK",{
        horizontalPosition: "center",
        verticalPosition: "bottom",
        duration: 5000
      });
      //limpiar
      this.form.reset();

    }
  }

  ngOnInit(): void {
  }

}
