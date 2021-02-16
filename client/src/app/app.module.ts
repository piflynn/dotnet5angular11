import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
import { ListsComponent } from './components/lists/lists.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NavComponent } from './components/nav/nav.component';
import { PhotoEditorComponent } from './components/photo-editor/photo-editor.component';
import { RegisterComponent } from './components/register/register-form.component';
import { MemberCardComponent } from './features/members/components/member-card/member-card.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { DropZoneComponent } from './components/drop-zone/drop-zone.component';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    ListsComponent,
    MessagesComponent,
    routingComponents,
    MemberCardComponent,
    PhotoEditorComponent,
    DropZoneComponent,
    DragAndDropDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
