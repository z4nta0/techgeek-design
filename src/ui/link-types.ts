


/**
 * link-types.ts = Link Types
 *
 * @summary
 * The shapes of the links a site hands the bar and the footer: a page link
 * (a label and a route inside the site, also used for the call to action)
 * and a sister link (a label and the full address of another TechGeek site).
 * Both components read them, so they live here rather than in either one.
 *
 * Sections:
 *  - Types
 *  - Exports
 *
 * @author z4nta0 <https://github.com/z4nta0>
 *
*/



// #region Types

type PagLinTyp = { labStr : string, patStr : string }; // What: Page Link Type. Why: Every link inside a site names its page and where it goes. How: This holds the link's label and its route.
type SisLinTyp = { labStr : string, urlStr : string }; // What: Sister Link Type. Why: A link to another TechGeek site names the site and leaves this one. How: This holds the site's name and its full address.

// #endregion Types



// #region Exports

export { type PagLinTyp, type SisLinTyp }; // What: Named Exports. Why: The bar, the footer, and every site that passes them links share these shapes. How: This exports both types.

// #endregion Exports


