import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { animate, stagger, transform } from 'motion';
@Component({
  selector: 'app-messanger-page',
  imports: [TranslateModule],
  templateUrl: './messanger-page.html',
  styleUrl: './messanger-page.scss'
})
export class MessangerPage implements OnInit, OnDestroy{
  @ViewChild('sidepanel') sidebar!: ElementRef;
  @ViewChild('chat') chat!: ElementRef;
  public IsRightMenuOpen: boolean = false;
  public isMobileSidebar: boolean = false;
  public resizeTimeout: any;
  ngOnInit(): void {
    this.checkWindow()
    window.addEventListener('resize', this.checkWindow.bind(this))
      
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkWindow.bind(this))
  }
  checkWindow(){
    clearTimeout(this.resizeTimeout)
    this.resizeTimeout = setTimeout(() => {
    this.isMobileSidebar = window.innerWidth < 1024}
    , 200)
    console.log(this.isMobileSidebar)
  }
  openRightMenu(){
    const sidebar = this.sidebar.nativeElement
    const chat = this.chat.nativeElement
    if (!this.IsRightMenuOpen){
      if (this.isMobileSidebar) {
        sidebar.style.transform = 'translateX(0%)';
        animate(sidebar, {opacity: ['0%', '100%']},
          {
            duration: 0.5
          }
        )
      }
      else{
        animate(sidebar, {transform: ['translateX(100%)', 'translateX(0%)']}, //sidebar appearing
        {
          duration: 0.5,
          ease: "easeOut"
        }
        );
        animate(chat, { marginRight: ['0px', '350px'] },  //chat shrinking
          { duration: 0.5, ease: 'easeOut'}
        );
      }
    }
    else {
      if (this.isMobileSidebar) {
        sidebar.style.transform = 'translateX(95%)';
        animate(sidebar, {opacity: ['100%', '0%']},
          {
            duration: 0.5
          }
        )
      }
      animate(sidebar,{ transform: ['translateX(0%)', 'translateX(100%)'] },
      {
        duration: 0.5,
        ease: 'easeOut',
      }
      );
      animate(chat, { marginRight: ['350px', '0px'] },  //chat shrinking
          { duration: 0.5, ease: 'easeOut'}
      );
    }
    this.IsRightMenuOpen = !this.IsRightMenuOpen;
  }
}
