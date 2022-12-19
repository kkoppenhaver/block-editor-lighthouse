**CURRENTLY BLOCKED**

I was intending to use the [Lighthouse PHP](https://spatie.be/docs/lighthouse-php/) package for this, but failed to read that it required installing Chromium on the server. Something that we can't guarantee for all webhosts. Outside of running the actual Lighthouse call behind an API, I'm not sure how to make this scalable.

# Lighthouse in the Block Editor

A WordPress plugin that brings Lighthouse performance scores right into the Block Editor.

## Local Environment

This plugin uses [wp-env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) for a local environment. To start locally, from within the current project directory, run:

```
$ npm -g i @wordpress/env
$ wp-env start
```

The local environment will be available at http://localhost:8888 (Username: admin, Password: password).