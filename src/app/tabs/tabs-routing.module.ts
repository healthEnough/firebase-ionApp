import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: 'uploader',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../uploader/uploader.module').then(m => m.UploaderPageModule)
          }
        ]
      },
      {
        path: 'post/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../post/post.module').then(m => m.PostPageModule)
          }
        ]
      },
      {
        path: 'edit-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/feed',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
