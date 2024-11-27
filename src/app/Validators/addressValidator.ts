import { AbstractControl, ValidationErrors } from "@angular/forms";

/* Pass in the whole address form group */
export function addressValidator(control: AbstractControl): ValidationErrors | null {
  const addressLine1 = control.get('AddressLine1');
  const addressLine2 = control.get('AddressLine2');

  if(addressLine1?.untouched || addressLine2?.untouched){
    return null;
  }

  return addressLine1 && addressLine2                /* Both controls are found */
    && (addressLine1?.value || addressLine2?.value)  /* One of the controls has a value */
    ? null
    : { address: { value: 'Both empty' } };
}
