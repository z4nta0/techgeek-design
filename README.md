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
the package's: the layout values always (the wordmark size only when its
domain ending needs the wordmark to shrink sooner on narrow phones), and the
color and font roles where it differs. The scales are never overridden.

The bar and footer take the site's own details as props:

```tsx
import { NavBarCom } from 'techgeek-design/ui/nav.tsx';
import { SitFooCom } from 'techgeek-design/ui/footer.tsx';

<NavBarCom
	avaLabStr='Available for freelance work'
	ctaLinObj={ { labStr : 'Hire Me', patStr : '/contact' } }
	emaAdrStr='contact@techgeek.dev'
	pagLinArr={ PAG_LIN_ARR }
	tagLinStr='Building the web, one commit at a time.'
	worEndStr='.dev'
/>

<SitFooCom
	pagLinArr={ PAG_LIN_ARR }
	sisLinArr={ SIS_LIN_ARR }
	tagLinStr='Building the web, one commit at a time.'
	worEndStr='.dev'
/>
```

The bar sits at layer 4 and its scrim at 3, so a site keeps its own layers
at 2 or below. The shared hooks are `techgeek-design/ui/scroll-top.ts`
(every link opens its page at the top) and
`techgeek-design/ui/page-description.ts` (a route's own search
description). A site draws its favicon set from
`src/assets/brand/favicon.svg` with its own script, as TechGeek.dev's
`design/icons/render.mts` does.

## Working on it

```
npm install
npm run lint
npm run typecheck
```

There's no build. A change is checked by installing this folder into a site
(`npm install ../techgeek-design`) and running that site's test suites, then
released as a new tag that each site moves to when it's ready.
