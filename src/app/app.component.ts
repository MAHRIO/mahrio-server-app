import { Component, NgZone, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mahr.io';
  public led;
  constructor( private http: HttpClient, private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      const socket = io();
      socket.on('event:led', (led) => {
        this.ngZone.run(() => {
          this.led = led;
        });
      });
    });
  }

  toggleLED( state ) {
    this.http.post('/led', {led: state}).toPromise().then( () => {});
  }
}
