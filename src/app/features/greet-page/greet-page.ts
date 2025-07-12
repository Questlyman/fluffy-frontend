import { Component } from '@angular/core'
import { HeaderComponent } from './components/header-component/header-component'
import { FooterComponent } from './components/footer-component/footer-component'
@Component({
  selector: 'app-greet-page',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './greet-page.html',
  styleUrl: './greet-page.scss',
})
export class GreetPage {}
