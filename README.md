# techgeek-design

The design shared by the TechGeek family of sites:
[TechGeek.dev](https://techgeek.dev/), [TechGeek.cards](https://techgeek.cards/),
and [TechGeek.support](https://techgeek.support/). It holds the design
tokens, the self-hosted fonts and base styles, the brand artwork, and the
site bar and footer, so the three sites look and behave as one family while
each keeps its own pages and theme.

## Using it in a site

Install a tagged release from GitHub:

```
npm install github:z4nta0/techgeek-design#v0.1.0
```

The package ships source rather than a build, and the site's own Vite
compiles it. React and React Router come from the site, as peer
dependencies.

Every import names the file it reads:

```ts
import 'techgeek-design/styles/fonts.css';
import 'techgeek-design/styles/tokens.css';
import 'techgeek-design/styles/base.css';
```

A site overrides the defaults it needs in its own stylesheet, loaded after
the package's: the layout values always, and the color and font roles where
it differs. The scales are never overridden.

## Working on it

```
npm install
npm run lint
npm run typecheck
```

There's no build. A change is checked by installing this folder into a site
(`npm install ../techgeek-design`) and running that site's test suites, then
released as a new tag that each site moves to when it's ready.
