import { Routes } from '@angular/router'
import { GreetPage } from './features/greet-page/greet-page'
import { MessangerPage } from './features/messanger-page/messanger-page'
import { Autorize } from './features/autorize/autorize'
export const routes: Routes = [
  { path: '', component: GreetPage },
  { path: 'me', component: MessangerPage },
  { path: 'auth', component: Autorize },
]
