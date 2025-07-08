import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'fluffy-frontend';
  constructor(){}
  ngOnInit(): void {
    const theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.body.classList.add(`theme-${theme}`)
  }
}
