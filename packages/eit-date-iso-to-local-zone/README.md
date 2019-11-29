# \<eit-date-iso-to-local-zone>

Web component to convert a given string in ISO 8601 format to a any date/time in any format. Based on date-fns and LitElement.

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i eit-date-iso-to-local-zone
```

## Usage
```html
<script type="module">
  import 'eit-date-iso-to-local-zone/eit-date-iso-to-local-zone.js';
</script>

<eit-date-iso-to-local-zone iso="2019-12-05T17:00:00+00:00"></eit-date-iso-to-local-zone>

<eit-date-iso-to-local-zone iso="2020-12-08T19:30:00+00:00" format="eeee 'a' 'las' kk:mm"></eit-date-iso-to-local-zone>
```



## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`

```bash
npm start:compatibility
```
To run a local development server in compatibility mode for older browsers that serves the basic demo located in `demo/index.html`
