import { Component } from '@angular/core';

@Component({
  selector: 'section-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  descargarPDF() {
    const pdfUrl = 'assets/CV_Elvin_Caceres.pdf';
    window.open(pdfUrl, '_blank');
  }
}
