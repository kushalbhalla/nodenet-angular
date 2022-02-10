import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    { 
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    },
    { 
        path: '', 
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
    },
    { 
        path: 'account', 
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
    },
    { 
        path: 'post', 
        loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    },
    { 
        path: 'post', 
        loadChildren: () => import('./post/post.module').then(m => m.PostModule)
    },
    { 
        path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule)
    },
    { 
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}