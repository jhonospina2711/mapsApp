import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.css',
  template: `
    <div>
      <h3>Counter: {{ counter }}</h3>
    </div>
  `
})
export class CounterAloneComponent {

  @Input() counter: number = 0;

}
