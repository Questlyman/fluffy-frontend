import { Component } from '@angular/core';
import { HeaderComponent } from './components/header-component/header-component';
@Component({
  selector: 'app-greet-page',
  imports: [HeaderComponent],
  templateUrl: './greet-page.html',
  styleUrl: './greet-page.scss'
})
export class GreetPage {
  
}
