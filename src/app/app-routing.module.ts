import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'regolamento',
    loadChildren: () => import('./pages/regolamento/regolamento.module').then( m => m.RegolamentoPageModule)
  },
  {
    path: 'rose',
    loadChildren: () => import('./pages/rose/rose.module').then( m => m.RosePageModule)
  },
  {
    path: 'pronostici',
    loadChildren: () => import('./pages/pronostici/pronostici.module').then( m => m.PronosticiPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
