import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  arr = [
    {
      dp: 'https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      story: 'https://plus.unsplash.com/premium_photo-1678812165206-688656de3b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    // Add other objects here
  ];

  showFullStory(index: number): void {
    const fullScreen = document.querySelector('#full-screen') as HTMLElement;
    fullScreen.style.display = 'block';
    fullScreen.style.backgroundImage = `url(${this.arr[index].story}`;

    setTimeout(() => {
      fullScreen.style.display = 'none';
    }, 3000);
  }
}
