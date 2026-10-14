


// #region Imports

import cssModObj from './footer.module.css'; // What: CSS Module Object. Why: The footer's own layout and link styles live in its own module. How: This maps each class name in footer.module.css to its hashed module class.


import { Fragment    } from 'react';              // What: Fragment. Why: Each sister link carries the dot before it, and the pair needs one key in the list. How: This groups them without adding an element.
import { Link        } from 'react-router';       // What: Link. Why: The footer's page links move between routes without a full page load. How: This renders each one as a router link.
import { PRO_LIN_ARR } from './profile-links.ts'; // What: Profile Link Array. Why: The footer links to the same profiles as the phone menu. How: This is the shared list its icons render.


import type { JSX       } from 'react';           // What: JSX. Why: The component declares the element it returns. How: This types its return as a JSX element.
import type { PagLinTyp } from './link-types.ts'; // What: Page Link Type. Why: The site hands the footer its page links. How: This types that prop.
import type { SisLinTyp } from './link-types.ts'; // What: Sister Link Type. Why: The site hands the footer its sister sites. How: This types that prop.

// #endregion Imports



/**
 * footer.tsx = Footer
 *
 * @summary
 * The footer every TechGeek site ends its pages with: the hexagon mark with
 * the site's tagline and links to its sister sites, a link to each of the
 * site's pages, and the copyright line above links to z4nta0's GitHub and
 * LinkedIn. Each site passes what differs (the wordmark's ending, the links,
 * the sister sites, and the tagline) as props. It reads the current year each
 * time it renders, so the copyright never goes stale.
 *
 * Sections:
 *  - Components
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Components

type SfcProTyp = { pagLinArr : PagLinTyp[], sisLinArr : SisLinTyp[], tagLinStr : string, worEndStr : string }; // What: Site-Footer-Component Props Type. Why: Each site hands the footer what differs between the sites. How: This types SitFooCom's props.

// #region SitFooCom

/**
 * SitFooCom = Site Footer Component
 *
 * @summary
 * Renders the footer: the hexagon mark, hidden from screen readers as
 * decoration, above the tagline and a line linking the sister sites in the
 * same tab, dots between them; a link to each page in a navigation landmark
 * labelled Footer navigation, so screen readers can tell it from the bar's;
 * and the copyright with the current year and the site's name above the
 * GitHub and LinkedIn links, each named by its aria-label and opening in a
 * new tab.
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
 * @param props.pagLinArr - Page Link Array: The site's pages, in the order
 *                          the footer links to them.
 * @param props.sisLinArr - Sister Link Array: The other TechGeek sites, in the
 *                          order the footer links to them.
 * @param props.tagLinStr - Tag Line String: The site's tagline, under the
 *                          mark.
 * @param props.worEndStr - Wordmark Ending String: The domain ending after
 *                          TechGeek in the copyright, such as .dev.
 *
 * @returns The footer element.
 *
 * @example
 * ```tsx
 * SitFooCom({ pagLinArr, sisLinArr, tagLinStr, ... }) // => <SitFooCom />
 * ```
 *
*/

function SitFooCom ( { pagLinArr, sisLinArr, tagLinStr, worEndStr } : SfcProTyp ) : JSX.Element {


	const curYeaNum = new Date().getFullYear(); // What: Current Year Number. Why: The copyright line names the current year. How: This reads it from today's date.



	return (


		<footer className={ cssModObj.sitFooFoo }>{ /* What: Site Footer Footer Element. Why: Every page ends with the brand, its page links, and the copyright. How: This holds the footer's centered column. */ }


			<div className={ cssModObj.fooInnDiv }>{ /* What: Footer Inner Div Element. Why: The footer's content sits in the page's centered column. How: This lays out the brand, the links, and the copyright. */ }


				<div className={ cssModObj.fooBraDiv }>{ /* What: Footer Brand Div Element. Why: The mark, the tagline, and the sister sites read as one block. How: This stacks them. */ }


					<svg
						className={ cssModObj.fooMarSvg }

						fill='none'
						viewBox='0 0 28 28'

						aria-hidden='true'
					>{ /* What: Footer Mark SVG Element. Why: The family's hexagon mark signs off the footer. How: This draws the outlined hexagon, its filled core, and its center dot, hidden from screen readers as decoration. */ }


						<polygon
							fill='none'
							points='14,2 26,8 26,20 14,26 2,20 2,8'
							stroke='var( --acc-mai-col )' // Accent Main Color = #F26419
							strokeWidth='2'
						/>{ /* What: Outer Hexagon Polygon Element. Why: The mark's outline is an orange hexagon. How: This traces it around the whole mark. */ }

						<polygon
							fill='var( --acc-sec-col )' // Accent Secondary Color = #7DB9D8
							opacity='0.5'
							points='14,7 21,11 21,17 14,21 7,17 7,11'
						/>{ /* What: Inner Hexagon Polygon Element. Why: A softer blue hexagon fills the mark's center. How: This draws it at half strength inside the outline. */ }

						<circle
							cx='14'
							cy='14'
							fill='var( --acc-mai-col )' // Accent Main Color = #F26419
							r='3'
						/>{ /* What: Center Dot Circle Element. Why: An orange dot finishes the mark's center. How: This draws it in the middle of the hexagons. */ }


					</svg>

					<span className={ cssModObj.fooTagSpa }>{ tagLinStr }</span>{ /* What: Footer Tagline Span Element. Why: The tagline sums up the site in a line. How: This shows the tagline the site passes under the mark. */ }

					<p className={ cssModObj.fooSisPar }>More from TechGeek: <span className={ cssModObj.fooSisSpa }>{ sisLinArr.map( ( sisLinObj, sisIndNum ) => <Fragment key={ sisLinObj.urlStr }>{ sisIndNum > 0 && <>{ ' ' }<span aria-hidden='true'>·</span>{ ' ' }</> }<a className={ cssModObj.fooSisAnc } href={ sisLinObj.urlStr }>{ sisLinObj.labStr }</a></Fragment> ) }</span></p>{ /* What: Footer Sister Paragraph Element. Why: Each TechGeek site is one of three sisters, and a visitor may want what another one offers. How: This links to the sister sites the site passes, in the same tab, kept together on one line so a narrow screen breaks after the colon, a dot hidden from screen readers as decoration before every link but the first. */ }


				</div>


				<nav
					className={ cssModObj.fooLinNav }

					aria-label='Footer navigation'
				>{ /* What: Footer Links Nav Element. Why: Every page can be reached from the bottom of any page, and a second navigation landmark needs a label to tell it from the bar's. How: This holds a link to each page. */ }


					{ pagLinArr.map( ( pagLinObj ) => ( // What: Page Link Map Call. Why: The footer links to every page in the site's order. How: This renders one router link per row.


						<Link
							key={ pagLinObj.patStr }

							className={ cssModObj.fooLinAnc }

							to={ pagLinObj.patStr }
						>{ pagLinObj.labStr }</Link> // What: Footer Page Link. Why: Each page has its own link. How: This routes to the row's path, labelled with its name.


					))}


				</nav>


				<div className={ cssModObj.fooCopDiv }>{ /* What: Footer Copyright Div Element. Why: The copyright and the profile links share the footer's last row. How: This stacks the copyright above the profile icons. */ }


					<span className={ cssModObj.fooCopSpa }>© { curYeaNum } TechGeek{ worEndStr }. All rights reserved.</span>{ /* What: Footer Copyright Span Element. Why: The footer ends with the copyright. How: This prints the current year read on each render and the site's name, TechGeek with its ending. */ }

					<div className={ cssModObj.fooSocDiv }>{ /* What: Footer Social Div Element. Why: The footer links to z4nta0's profiles. How: This holds the GitHub and LinkedIn links. */ }


						{ PRO_LIN_ARR.map( ( proLinObj ) => ( // What: Footer Profile Map Call. Why: Every profile gets an icon link. How: This renders one link per row of the shared profile list.


							<a
								key={ proLinObj.labStr }

								className={ cssModObj.fooIcoAnc }

								href={ proLinObj.urlStr }
								rel='noreferrer'
								target='_blank'

								aria-label={ proLinObj.labStr }
							>{ /* What: Footer Icon Anchor Element. Why: A visitor can reach z4nta0's profiles from any page. How: This links to the row's profile in a new tab, named by its aria-label since it shows only an icon. */ }


								<svg
									className={ cssModObj.fooIcoSvg }

									fill='currentColor'
									viewBox='0 0 24 24'

									aria-hidden='true'
								>{ /* What: Footer Icon SVG Element. Why: The platform's mark tells a visitor where the link goes. How: This draws the mark in the link's color, hidden from screen readers since the link is named, and lets presses fall through to the link. */ }


									<path d={ proLinObj.icoStr } />{ /* What: Profile Mark Path Element. Why: The mark is one path. How: This traces the row's path data. */ }


								</svg>


							</a>


						))}


					</div>


				</div>


			</div>


		</footer>


	);


}

// #endregion SitFooCom

// #endregion Components



// #region Exports

export { SitFooCom }; // What: Named Exports. Why: Every page of every TechGeek site renders the footer below its content. How: This exports SitFooCom.

// #endregion Exports


