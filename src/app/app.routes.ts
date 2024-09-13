import { Routes } from '@angular/router';
import { PanelPerfilComponent } from './panel-perfil/panel-perfil.component';
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { HomeComponent } from './home/home.component';
import { BusquedaLibrosComponent } from './busqueda-libros/busqueda-libros.component';

export const routes: Routes = [
    {
        path: 'mi-perfil',
        component: MiPerfilComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'busqueda-libros',
        component : BusquedaLibrosComponent
    }
];
