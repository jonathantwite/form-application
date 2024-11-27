# FormApplication

Test application to investigate four different ways of making a form using Angular

## Template Driven Form (Angular defined model)

* Very simple form
* Defined in HTML
* Suitable for newsletter sign up or similar forms

## Template Driven Form (User defined model)

* Allows validation
* Valid, touched and pristine parameters can be styled
* Still defined in HTML

## Reactive Form

* Defined in code
* Allows loading of data (can be selective)
* Allows testing of validation etc.
* Allows adding and removing elements, for example, using `FormArray` with a for-loop in HTML
* More code than TDF

## Reactive Form (Form Builder)

* Easier syntax for Reactive Forms
* Reduces the amount of code
