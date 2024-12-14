import { provideRouter, Routes } from '@angular/router';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ProductosComponent } from './productos/productos.component';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { ComestiblesComponent } from './comestibles/comestibles.component';

export const routes: Routes = [
    { path: '', component: ProductosComponent }, // Ruta predeterminada
    { path: 'productos', component: ProductosComponent },
    { path: 'tecnologia', component: TecnologiaComponent },
    { path: 'limpieza', component: LimpiezaComponent },
    { path: 'comestibles', component: ComestiblesComponent },
];

export const approuterprovider = provideRouter(routes);