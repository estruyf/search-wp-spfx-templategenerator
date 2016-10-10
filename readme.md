# Search Web Part SPFx Template Generator
This is a sample project that can help you building your own templates for the [Search SPFx Web Part](https://github.com/estruyf/search-wp-spfx).

## Installation
1. Clone this repo
1. `$ npm install`
1. Create a `config.json` file. You can use `config-sample.json` as base.
1. Add a new folder with the name of the library (ex.: Shared Documents) in **src**.

## Usage
1. Create a new template file in your library folder. You can use one of the provided sample templates: [sample folder](./sample).
1. Start up a new gulp watch process: `$ gulp watch`
1. Once you do some file changes, they will automatically get transpiled and uploaded to your site.
