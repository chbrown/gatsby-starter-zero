# gatsby-starter-zero

A slimmer Gatsby starter.

Get [`gatsby`](https://github.com/gatsbyjs/gatsby):

```sh
npm install -g gatsby
```

Get started with this starter:

```sh
gatsby new my-simple-site gh:chbrown/gatsby-starter-zero
```

Go forth and develop!

```sh
cd my-simple-site
gatsby develop
```

When it's all ready:

```sh
gatsby build
```

## Explanation

* `.gitignore`: not required, but the `gatsby` command isn't exactly tidy, so it's handy to have these defaults.
* `config.toml`: bafflingly, this file's presence is required, but it doesn't have to contain anything.
* `html.js`: should be called `Layout.jsx` or something but yeah, it's required, and has to have this filename.
  - `module.exports` must be set to an actual `React.Component` class (a stateless functional component won't cut it)
* `package.json`: required, but `gatsby` the dependency transitively pulls in `react` and `react-dom`.
* `pages/`: each file in here will be served as a distinct URL. E.g., `pages/admin.js` would be served as `/admin/`
* `README.md`: not required!
* `site.css`: not required, but the `gatsby build` will choke when inlining css without _some_ css having been used.


## Building gh-pages

    rev=$(git rev-parse --short master)
    repo=${TMPDIR-/tmp/}gatsby-starter-zero-gh-pages
    git clone git@github.com:chbrown/gatsby-starter-zero.git -b gh-pages $repo
    gatsby build && cp -R public/ $repo
    cd $repo && git add . && git commit -m "Sync with master @ $rev" && git push

Check result at <https://chbrown.github.io/gatsby-starter-zero/>


## License

Copyright © 2017 Christopher Brown. [MIT Licensed](https://chbrown.github.io/licenses/MIT/#2017).
