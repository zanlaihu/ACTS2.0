import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'AAA01X',
    loadChildren: () =>
      import('./pages/AAA01X/AAA01X.module').then((m) => m.APA01XModule),
  },
];

/**
 * Main Module
 *
 * @export
 * @class BusinessModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessModule {}
