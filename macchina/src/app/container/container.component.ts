import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  cars: string[];
  constructor() { 
    this.cars = ['Escavatore', 'Bulldozer', 'Betoniera', 'Pale gommate','Gru a torre','Rullo compressore','Gru mobile','Caricatore frontale','Motovolante','Martello demolitore',]; 
 }
 ngOnInit() {
 }

}
