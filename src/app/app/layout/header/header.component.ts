import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   constructor(private readonly sidebarService: SidebarService){}

   toggleCartSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

}
