import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

interface Card {
  value: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-memory-game',
   imports: [CommonModule],   
  templateUrl: './memory-game.html',
  styleUrl: './memory-game.scss'
})
export class MemoryGame {

  flippedIndexes: number[] = [];
  cards: Card[] = [
  {value: 'A', flipped: false , matched: false},
  {value: 'A', flipped: false , matched: false},
  {value: 'B', flipped: false , matched: false},
  {value: 'B', flipped: false , matched: false},
  {value: 'C', flipped: false , matched: false},
  {value: 'C', flipped: false , matched: false},
  {value: 'D', flipped: false , matched: false},
  {value: 'D', flipped: false , matched: false},
  {value: 'E', flipped: false , matched: false},
  {value: 'E', flipped: false , matched: false},
  {value: 'F', flipped: false , matched: false},
  {value: 'F', flipped: false , matched: false},
  {value: 'G', flipped: false , matched: false},
  {value: 'G', flipped: false , matched: false},
  {value: 'H', flipped: false , matched: false},
  {value: 'H', flipped: false , matched: false},
 ];

 flipCard(index: number): void {
    const card = this.cards[index];

    // Prevent flipping if already matched or already flipped
    if (card.flipped || card.matched) return;

    card.flipped = true;
    this.flippedIndexes.push(index);

    // If 2 cards are flipped, check match
    if (this.flippedIndexes.length === 2) {
      this.flipStay();
    }
  }

  // Check if 2 flipped cards stay or flip back
  private flipStay(): void {
    const [firstIndex, secondIndex] = this.flippedIndexes;
    const firstCard = this.cards[firstIndex];
    const secondCard = this.cards[secondIndex];

    if (firstCard.value === secondCard.value) {
      // ✅ Match → keep them open
      firstCard.matched = true;
      secondCard.matched = true;
      this.flippedIndexes = [];
    } else {
      // if not a match flip back after 1 second
      setTimeout(() => {
        firstCard.flipped = false;
        secondCard.flipped = false;
        this.flippedIndexes = [];
      }, 1000);
    }
  }

}
