import { Component } from '@angular/core';
import { CounterAloneComponent } from "../../components/counter-alone/counter-alone.component";
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';


@Component({
  selector: 'app-alone-page',
  standalone: true,
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css',
  imports: [CounterAloneComponent, SideMenuComponent],
})
export class AlonePageComponent {

}
