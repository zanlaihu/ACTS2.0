import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { AAA01X01Component } from './AAA01X01/AAA01X01.componet';
import { AAA01X02Component } from './AAA01X02/AAA01X02.componet';
import { AAA01X03Component } from './AAA01X03/AAA01X03.componet';

/**
 * AAA01XModule
 *
 * @export
 * @class APA01XModule
 */
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'AAA01X01',
        pathMatch: 'full',
      },
      {
        path: 'AAA01X01',
        component: AAA01X01Component,
      },
      {
        path: 'AAA01X02',
        component: AAA01X02Component,
      },
      {
        path: 'AAA01X03',
        component: AAA01X03Component,
      },
    ]),
  ],
  declarations: [AAA01X01Component, AAA01X02Component, AAA01X03Component],
})
export class APA01XModule {}
