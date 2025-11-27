import { Route } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing'
  },
  {
    path: 'landing',
    loadComponent: () => import('./pages/landing/landing').then(m => m.LandingComponent)
  },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'noticias',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/noticias/noticias').then(m => m.NoticiasComponent)
  },
  {
    path: 'servicios',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/servicios/servicios').then(m => m.ServiciosComponent)
  },
  {
    path: 'contacto',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/contacto/contacto').then(m => m.ContactoComponent)
  },
  {
    path: 'diplomados',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/diplomados/diplomados').then(m => m.DiplomadosComponent)
  },
  {
    path: 'consultas-online',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/consultas-online/consultas-online').then(m => m.ConsultasOnlineComponent)
  },
  {
    path: 'capacitaciones',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/capacitaciones/capacitaciones').then(m => m.CapacitacionesComponent)
  },
  {
    path: 'seminario-afiliado',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/seminario-afiliado/seminario-afiliado').then(m => m.SeminarioAfiliadoComponent)
  },
  {
    path: 'workshop-afiliados',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/workshop-afiliados/workshop-afiliados').then(m => m.WorkshopAfiliadosComponent)
  },
  {
    path: 'service-info/:id',
    loadComponent: () => import('./pages/service-info/service-info').then(m => m.ServiceInfoComponent)
  },
  {
    path: '**',
    redirectTo: 'landing'
  }
];
