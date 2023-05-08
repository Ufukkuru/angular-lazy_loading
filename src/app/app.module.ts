import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"login",
        loadChildren:()=> import("./component/login/login.module").then(m => m.LoginModule),
        component:LoginComponent
      },
      {
        path:"",
        loadChildren:()=> import("./component/layouts/layouts.module").then(m => m.LayoutsModule),
      },
      {
        path:"**",
        loadChildren:() => import("./component/not-found/not-found.module").then(m => m.NotFoundModule),
        component:NotFoundComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
