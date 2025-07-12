import { Component, inject } from '@angular/core'
import { OnDestroy, OnInit } from '@angular/core'
import { LocalizationService } from '../../../../core/localization-service'
import { TranslateModule } from '@ngx-translate/core'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-header-component',
  imports: [TranslateModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
  standalone: true,
})
export class HeaderComponent implements OnInit, OnDestroy {
  private config = inject(LocalizationService)
  current_lang = 'en'
  langNames!: string[]
  languages: Record<string, string> = {}

  private sub = new Subscription()
  ngOnInit(): void {
    const LangSub = this.config.refresh_lang$.subscribe((lang) => {
      this.current_lang = lang
    })
    this.sub.add(LangSub)
    this.languages = this.config.supported_langs
    this.langNames = Object.keys(this.languages)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  public isMenuOpen = false
  public langMenuOpen = false
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
  toggleLangMenu() {
    this.langMenuOpen = !this.langMenuOpen
  }
  setLanguage(lang: string) {
    this.config.setLanguage(lang)
  }

  nav_items: string[] = ['Something', 'Contacts', 'Our Projects', 'W']
}
