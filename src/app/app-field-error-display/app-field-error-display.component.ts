import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-field-error-display',
  templateUrl: './app-field-error-display.component.html',
  styleUrls: ['./app-field-error-display.component.css']
})
export class AppFieldErrorDisplayComponent {
  
  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
