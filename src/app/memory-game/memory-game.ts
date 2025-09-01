import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
    {value: '/images/apple.webp', flipped: false , matched: false},
    {value: '/images/apple.webp', flipped: false , matched: false},
    {value: '/images/bird.webp', flipped: false , matched: false},
    {value: '/images/bird.webp', flipped: false , matched: false},
    {value: '/images/book.webp', flipped: false , matched: false},
    {value: '/images/book.webp', flipped: false , matched: false},
    {value: '/images/car.webp', flipped: false , matched: false},
    {value: '/images/car.webp', flipped: false , matched: false},
    {value: '/images/chuchu.webp', flipped: false , matched: false},
    {value: '/images/chuchu.webp', flipped: false , matched: false},
    {value: '/images/cloud.webp', flipped: false , matched: false},
    {value: '/images/cloud.webp', flipped: false , matched: false},
    {value: '/images/cup.webp', flipped: false , matched: false},
    {value: '/images/cup.webp', flipped: false , matched: false},
    {value: '/images/dog.webp', flipped: false , matched: false},
    {value: '/images/dog.webp', flipped: false , matched: false},
  ];

  constructor() {
    this.shuffleCards();
  }

  private shuffleCards(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

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
