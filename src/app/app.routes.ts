import { Routes } from '@angular/router';;
import { MiPerfilComponent } from './mi-perfil/mi-perfil.component';
import { HomeComponent } from './home/home.component';
import { BusquedaLibrosComponent } from './busqueda-libros/busqueda-libros.component';
import { PerfilInfoComponent } from './shared/perfil-info/perfil-info.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';

import { ProfileRecommendationsComponent } from './profile-recommendations/profile-recommendations.component';
import { ProfileBooksReadedComponent } from './profile-books-readed/profile-books-readed.component';
import { ProfileBooksToReadComponent } from './profile-books-to-read/profile-books-to-read.component';
import { LoginComponent } from './login/login.component';
import { ViewRecommendationComponent } from './view-recommendation/view-recommendation.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        //ACOMODAR EL COMPONENT EN ESTA RUTA
        path: 'my-recommendations',
        component: HomeComponent,
    },
    {
        path: 'view-recommendation',
        component: ViewRecommendationComponent,
    },
    {
        path: 'search-books',
        component : BusquedaLibrosComponent
    },{
        path: 'my-profile',
        component: MiPerfilComponent,
        children: [
            { path: 'information', component: PerfilInfoComponent }, 
            { path: 'friends', component: ProfileFriendsComponent },
            { path: 'books-readed', component: ProfileBooksReadedComponent },
            { path: 'books-to-read', component: ProfileBooksToReadComponent },
            { path: 'recommendations-to-value', component: ProfileRecommendationsComponent },
            { path: '', redirectTo: 'information', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }//ESTE VA ULTIMO
];
