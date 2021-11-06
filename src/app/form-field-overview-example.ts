import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

/** @title Simple form field */
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['form-field-overview-example.css'],
})
export class FormFieldOverviewExample implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fb.group({
      _id: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      age: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
