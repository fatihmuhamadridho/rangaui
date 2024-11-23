import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule],
  exports: [ButtonComponent, ButtonModule],
})
export class RangkauiAngularModule {}
