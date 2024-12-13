import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
// import { provideFormly } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


@Component({
  selector: 'app-formly-test',
  imports: [ReactiveFormsModule, FormlyModule],
  providers: [
    // provideFormly(),
    FormlyBootstrapModule, // Add bootstrap styling for Formly
  ],
  templateUrl: './formly-test.component.html',
  styleUrl: './formly-test.component.scss'
})
export class FormlyTestComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter your email',
        required: true,
        type: 'email',
      },
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        placeholder: 'Enter your age',
        type: 'number',
        min: 1,
        max: 120,
      },
    },
    {
      key: 'gender',
      type: 'select',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Select your gender',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept Terms & Conditions',
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    console.log('Submitted Data:', model);
  }
}

// npm install @ngx-formly/bootstrap
