import { Routes } from '@angular/router'
import { GreetPage } from './features/greet-page/greet-page'
import { MessangerPage } from './features/messanger-page/messanger-page'
export const routes: Routes = [
    { path: '', component: GreetPage },
    { path: 'me', component: MessangerPage}
]
