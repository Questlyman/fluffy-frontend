import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-autorize',
  imports: [],
  templateUrl: './autorize.html',
  styleUrl: './autorize.scss',
})
export class Autorize {
  public isPasswordVisible = false
  public ignoreHover = false
  public isHovered = false
  @ViewChild('showPasswordButton') showPasswordButton!: ElementRef
  showPassword() {
    if (this.showPasswordButton.nativeElement.type === 'password') {
      this.showPasswordButton.nativeElement.type = 'text'
      this.isPasswordVisible = !this.isPasswordVisible
    }
    if (this.ignoreHover === true && this.showPasswordButton.nativeElement.type === 'text') {
      this.showPasswordButton.nativeElement.type = 'password'
      this.isPasswordVisible = !this.isPasswordVisible
    }
    this.ignoreHover = !this.ignoreHover
  }
  hoverShowPassword() {
    if (this.showPasswordButton.nativeElement.type === 'password' && !this.ignoreHover) {
      this.showPasswordButton.nativeElement.type = 'text'
      this.isPasswordVisible = !this.isPasswordVisible
    }
  }
  hoverHidePassword() {
    if (this.showPasswordButton.nativeElement.type === 'text' && !this.ignoreHover) {
      this.showPasswordButton.nativeElement.type = 'password'
      this.isPasswordVisible = !this.isPasswordVisible
    }
  }
}
