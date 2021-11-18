import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import {  Validators } from '@angular/forms'

@Component({
  selector: 'home',
  templateUrl: './home.template.html',
  styleUrls: ['./home.style.scss']
})

export class Home implements OnInit {
  contactForm;


  footerBlocs =
    [{'text':"Join our French Discord Group",'img':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEX////tKTsnN4wyQZIaLYh3f7D19vv0h4/sHTPuNUY8Spd9hLT0jJTtKj0vPpEmOI3EPaABAAABDUlEQVR4nO3QSQGAMBAEsIUC5a5/t5hgfomE1NlSxrVVzP0cMfWOOWRZgyd9n2KqpUqcOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06c/OUD0Dbaj8+hhpAAAAAASUVORK5CYII="},{'text':"Join our English Discord Group",'img':"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"},{'text':"Join our PRIVATE Discord Group",'img':"https://mpng.subpng.com/20180414/qgq/kisspng-discord-teamspeak-computer-icons-logo-game-buttorn-5ad1d92bae24b2.4173961715237020597133.jpg"}]

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]],
      phonePrefix: ['', [Validators.required]],

      language: ['', ],
      code: ['', ]
    });
  }

  ngOnInit(): void {
    }

  onSubmit() {
    console.log(this.contactForm.value);
  }


}




