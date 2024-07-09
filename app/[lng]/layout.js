import './global.css'

import { dir } from 'i18next'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'

/**
 * Generates static parameters for each language.
 *
 * @returns {Array<Object>} An array of language parameter objects.
 */
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

/**
 * Generates metadata for the page.
 *
 * @param {Object} context - The context object.
 * @param {Object} context.params - The parameters object.
 * @param {string} context.params.lng - The language parameter.
 * @returns {Promise<Object>} - The metadata object with title and content.
 */
export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return {
    title: t('title'),
    content: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

/**
 * The root layout component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the layout.
 * @param {Object} props.params - The parameters object.
 * @param {string} props.params.lng - The language parameter.
 * @returns {JSX.Element} - The rendered root layout component.
 */
export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
