import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'section-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  fb = inject(FormBuilder);
  toastr = inject(ToastrService);

  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  isValidField(field: string): boolean | null {
    if (!this.form.controls[field]) return null;
    return (
      this.form.controls[field].errors && this.form.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.form.controls[field]) return null;
    const errors = this.form.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'email':
          return `Email invalido.`;
      }
    }

    return null;
  }

  async sendEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    emailjs.init('sp4oIEH-WIe33ICqy');
    await emailjs.send('service_giatji5', 'template_d9iyaea', {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });

    this.toastr.success('Gracias por contactarte conmigo.', 'Mensaje enviado');
    this.form.reset();
  }
}
