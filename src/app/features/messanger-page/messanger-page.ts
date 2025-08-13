import { Component, ElementRef, ViewChild, OnInit, OnDestroy, inject } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { animate } from 'motion'
import { MenuComponent } from './components/menu-component/menu-component'
@Component({
  selector: 'app-messanger-page',
  standalone: true,
  imports: [TranslateModule, MenuComponent],
  templateUrl: './messanger-page.html',
  styleUrl: './messanger-page.scss',
})
export class MessangerPage {
  @ViewChild('menu') menu!: ElementRef
}
