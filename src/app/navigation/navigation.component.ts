// navigation.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  menuItems: any[] = [
    {
      label: 'Search a car',
      icon: 'pi pi-home',
      routerLink: ['/']
    },
    {
      label: 'Search by maps',
      icon: 'pi pi-car',
      // items: [
      //   {
      //     label: 'All Cars',
      //     routerLink: ['/cars']
      //   },
      //   {
      //     label: 'Rent a Car',
      //     routerLink: ['/rent-car']
      //   }
      // ]
    },
    {
      label: 'Articles',
      icon: 'pi pi-cog',
      // items: [
      //   {
      //     label: 'Car Maintenance',
      //     routerLink: ['/maintenance']
      //   },
      //   {
      //     label: 'Insurance',
      //     routerLink: ['/insurance']
      //   }
      // ]
    },
    {
      label: 'About us',
      icon: 'pi pi-home',
      routerLink: ['/']
    },
    {
      label: 'Rent your car',
      icon: 'pi pi-home',
      routerLink: ['/']
    }
  ];
}
