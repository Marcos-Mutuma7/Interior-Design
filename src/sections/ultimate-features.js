/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'We’re Committed to Our People First',
    description: `The proud, caring and resilient members of the Waste Management family are the foundation of our success. We commit to taking care of each other, our customers, our communities and the environment.`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'We’re Committed to Success With Integrity',
    description: `Our success is based not only on the results we achieve, but how we achieve them. We commit to being accountable, honest, trustworthy, ethical and compliant in all we do.`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'We Value Inclusion & Diversity',
    description: `We embrace and cultivate respect, trust, open communications and diversity of thought and people.`,
  },
  {
    id: 4,
    icon: icon4,
    path: '#!',
    title: 'We Value Our Customers',
    description: `We place our customers at the center of what we do and aspire to delight them every day.`,
  },
  {
    id: 5,
    icon: icon5,
    path: '#!',
    title: 'We Value Safety',
    description: `We have zero tolerance for unsafe actions and conditions and make safety a core value without compromise.`,
  },
  {
    id: 6,
    icon: icon6,
    path: '#!',
    title: 'We Value Our Environment',
    description: `We are responsible stewards of the environment and champions for sustainability.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section id="feature" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Who are we?"
          title="Always Working For A Sustainable Tomorrow."
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
