import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailFormatValidator(control: AbstractControl): ValidationErrors | null {
  if(/.+@.+\..+/.test(control.value)){
    return null;
  }
  else {
    return {emailFormat: {value: control.value}};
  }
}

export function regexFormatValidator(forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if(forbiddenName.test(control.value)) {
      return null;
    }
    else {
      return {regexFormat: {value: control.value}};
    }
  };
}