import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { JadwalKuliahComponent } from './_components/jadwal-kuliah/jadwal-kuliah.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { SettingComponent } from './_components/setting/setting.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
  {
    path: 'jadwal-kuliah',
    component: JadwalKuliahComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
