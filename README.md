# Code Haven Yale

Information: 
- Site is deployed with Netlify, which also powers the form.
- Pages are generated using GatsbyJS, which gets data from markdown files.

## How to add pages

First, create a new folder and corresponding `index.md` file in the `src/pages` directory. This will be the content of your page, and the other parts of the website draw from this markdown file, whether from the front-matter or the content itself. 

Secondly, create the relevant template file in `src/templates`. Edit the query to draw from relevant fields in the markdown file, and import any components you would like from `src/components`.


## Available Scripts

### Develop
Start a hot-reloading development environment accessible at `localhost:8000`
```shell
yarn start
```

### Build
Get an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
```shell
yarn build
```

### Serve
gatsby serve — Gatsby starts a local HTML server for testing your built site.
```shell
yarn serve
```

### Lint
Lint the code according to eslintrc file, for consistency.
```shell
yarn lint
```

### Clean
Remove the .cache and public for a scratch compile.
```shell
yarn clean
```


