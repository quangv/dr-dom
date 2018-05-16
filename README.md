# Dr-Dom

This library wraps [r-dom](https://github.com/uber/r-dom), with some added conveniences.

- defaults to `div`
- convenient `className` as 2nd arg (1st arg if `div`)
- idiomatic _r-dom_, very small wrapper.

---

Works well with twitter-bootstrap, coffee-script, react/create-react-app, jsx, [ramdascript](https://github.com/yosbelms/ramdascript) for us Lisp fans.

**Example:**

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

**Notes:**

- could use some tests.
- not under active development, but feel free to fork if you like `r-dom`.
