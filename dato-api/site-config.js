import { fetchAPI } from "@/lib/api";

export const siteConfigurationQuery = `
  siteConf(filter: {configId: {eq: "${process.env.WEBSITE_CONFIG_ID}"}}, locale: $locale) {
    id
    websiteName
}

`;

export async function getSiteConfiguration(locale, preview) {
  const data = await fetchAPI(
    `
          query siteConfiguration($locale: SiteLocale = ${process.env.DEFAULT_SITE_LOCALE}) {
            
              ${siteConfigurationQuery}
            }
      `,
    {
      preview,
      variables: {
        locale,
      },
    }
  );
  return data;
}
