import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Gallery from 'sections/gallery'
import UltimateFeatures from 'sections/ultimate-features';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing'
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="interior Design"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <Gallery/>
        <UltimateFeatures />
        <CustomerSupport />
        <Pricing/>
        <Blog />
        <Subscription/>
      </Layout>
    </ThemeProvider>
  );
}
