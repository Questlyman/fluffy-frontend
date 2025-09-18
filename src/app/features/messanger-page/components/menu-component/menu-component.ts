import { Component, ElementRef, ViewChild } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { animate } from 'motion'
import { fromEvent, Subject, takeUntil } from 'rxjs'
@Component({
  selector: 'app-menu-component',
  imports: [TranslateModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  @ViewChild('menu') menu!: ElementRef
  @ViewChild('overlay') overlay!: ElementRef
  openMenu() {
    const menu = this.menu.nativeElement
    const close$ = new Subject<void>()
    menu.style.transform = 'translateX(0%)'
    animate(
      menu,
      { opacity: ['0%', '100%'] },
      {
        duration: 0.2,
      },
    )
    fromEvent<PointerEvent>(document, 'pointerdown') //подписка на закрытие меню
      .pipe(takeUntil(close$))
      .subscribe((e) => {
        if (!this.overlay.nativeElement.contains(e.target)) {
          animate(
            menu,
            { opacity: ['100%', '0%'] },
            {
              duration: 0.2,
            },
          )
          setTimeout(() => {
            menu.style.transform = 'translateX(100%)'
            close$.next()
          }, 500)
        }
      })
  }
}
