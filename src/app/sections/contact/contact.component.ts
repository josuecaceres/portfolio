import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'section-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  async sendEmail(e: Event) {
    if (
      this.form.invalid ||
      this.form.get('form_name')?.value == '' ||
      this.form.get('form_email')?.value == '' ||
      this.form.get('message')?.value == ''
    ) {
      console.log('invalid');
      return;
    }

    emailjs.init('sp4oIEH-WIe33ICqy');
    await emailjs.send('service_giatji5', 'template_d9iyaea', {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    alert('Succees');
    this.form.reset();
  }
}
