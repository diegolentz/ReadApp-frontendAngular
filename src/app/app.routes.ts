import { Routes } from '@angular/router';;
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { HomeComponent } from './home/home.component';
import { BusquedaLibrosComponent } from './busqueda-libros/busqueda-libros.component';
import { OpcionSeleccionadaComponent } from './opcion-seleccionada/opcion-seleccionada.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'busqueda-libros',
        component : BusquedaLibrosComponent
    },{
        path: 'mi-perfil',
        component: MiPerfilComponent,
        children: [
            { path: ':opcion', component: OpcionSeleccionadaComponent },
            { path: '', redirectTo: 'informacion', pathMatch: 'full' },
        ]
    }
];
