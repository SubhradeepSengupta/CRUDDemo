import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserFormComponent } from './user/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    UserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: UserFormComponent,
        pathMatch: 'full'
      }
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
