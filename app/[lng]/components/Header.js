/**
 * Header component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.heading - The heading text to be displayed.
 * @returns {JSX.Element} - The rendered Header component.
 */
export const Header = ({ heading }) => (
  <>
    <h2>
      Next.js 13/14 <small>(app directory)</small> - i18next
      <hr />
    </h2>
    <h1>{heading}</h1>
    <a className="github" href="//github.com/i18next/i18next">
      <i className="typcn typcn-social-github-circular" />
    </a>
  </>
)
