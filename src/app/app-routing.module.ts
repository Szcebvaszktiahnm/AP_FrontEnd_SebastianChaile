import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencias/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencias/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id',component: EditExperienciaComponent},
  {path:'nuevaedu',component: NeweducacionComponent},
  {path:'editedu/:id',component: EditeducacionComponent},
  {path:'editskill/:id',component: EditSkillComponent},
  {path:'newskill',component: NewSkillComponent},
  {path:'editacercade/:id',component:EditAcercaDeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
