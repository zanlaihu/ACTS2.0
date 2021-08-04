import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { AAA01X01Component } from './AAA01X01/AAA01X01.componet';

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
    ]),
  ],
  declarations: [AAA01X01Component],
})
export class APA01XModule {}
