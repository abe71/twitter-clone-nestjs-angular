import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule.forRoot({
            domain: 'YOUR_AUTH0_DOMAIN',
            clientId: 'YOUR_AUTH0_CLIENT_ID',
            authorizationParams: {
                redirect_uri: window.location.origin,
            },
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
