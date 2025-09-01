import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterOutlet,CommonModule]
})

export class App{
  cards=[
    {value: 'A', flipped: false, matched: false},
    {value: 'A', flipped: false, matched: false},
    {value: 'B', flipped: false, matched: false},
    {value: 'B', flipped: false, matched: false},
    {value: 'C', flipped: false, matched: false},
    {value: 'C', flipped: false, matched: false},
    {value: 'D', flipped: false, matched: false},
    {value: 'D', flipped: false, matched: false},
  ]
  

flippedCards:number[] = [];

flipCard(index: number){
 
}
}