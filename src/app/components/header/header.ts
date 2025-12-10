import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Publicidad } from '../../entity/Publicidad';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  @Input() publicidad: Publicidad = new Publicidad();

}
