# Dr-Dom

This library wraps [r-dom](https://github.com/uber/r-dom), with some added conveniences.

```coffee
Form = ->
  d 'page', [
    d r.form, 'container', [
      d 'row', [
        d 'w-25 d-none d-lg-block', ''
        d 'col', [
          d 'form-group', [
            d r.input, 'form-control', type: 'email', placeholder: 'email'
          ]
          d 'form-group', [
            d r.input, 'form-control', type: 'password', placeholder: 'password'
          ]
          d [
            d r.button, 'btn btn-primary btn-block', type: 'submit', 'Login'
          ]
        ]
      ]
    ]
  ]

```
