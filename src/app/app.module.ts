import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { appRoutes  } from './routers';   
import { FormsModule } from '@angular/forms';
import { AuthentictionModule } from './authentiction/authentiction.module';
import { Viewer3dModule } from './viewer3d/viewer3d.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthentictionModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    Viewer3dModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
