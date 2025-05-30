import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { loginGuard } from './login.guard'
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from '../layout/auth-layout/auth-layout.component';
import { AppComponent } from '../app/app.component';
import { LoginComponent } from '../login/login.component';
import { _403Component } from './../pages/_403/_403.component';
import { SettingComponent } from './../pages/setting/setting.component';
import { AccessActivityComponent } from './../pages/accessactivity/accessactivity.component';
import { AppIconComponent } from './../pages/appicon/appicon.component';
import { MenuCategoryComponent } from './../pages/menucategory/menucategory.component';
import { ProductComponent } from './../pages/product/product.component';
import { UserComponent } from './../pages/user/user.component';
import { UserGroupComponent } from './../pages/usergroup/usergroup.component';
import { UserGroupPermissionComponent } from './../pages/usergrouppermission/usergrouppermission.component';
import { UserTypeComponent } from './../pages/usertype/usertype.component';
import { WebpageComponent } from './../pages/webpage/webpage.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { JobdetailComponent } from './../pages/jobdetail/jobdetail.component';
import { JoblocationComponent } from './../pages/joblocation/joblocation.component';
import {HomePageComponent} from './../public-pages/home-page/home-page.component'
import {PublicLayoutComponent} from './../public-pages/public-layout/public-layout.component'

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: AppComponent }
      , { path: '_403', component: _403Component }
      , { path: 'dashboard', component: DashboardComponent }
      , { path: 'setting', component: SettingComponent }
      , { path: 'access-activities', component: AccessActivityComponent }
      , { path: 'AppIcon', component: AppIconComponent }
      , { path: 'MenuCategory', component: MenuCategoryComponent }
      , { path: 'products', component: ProductComponent }
      , { path: 'User', component: UserComponent }
      , { path: 'UserGroup', component: UserGroupComponent }
      , { path: 'UserGroupPermission', component: UserGroupPermissionComponent }
      , { path: 'UserType', component: UserTypeComponent }
      , { path: 'Webpage', component: WebpageComponent }
      , { path: 'Jobdetail', component: JobdetailComponent }
      , { path: 'Joblocation', component: JoblocationComponent }
    ]
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    canActivate: [loginGuard],
    children: [{ path: '', component: LoginComponent }]
  },
  {
    path: 'app',
    component: PublicLayoutComponent,
    children: [{ path: 'home', component: HomePageComponent }]
  }
];