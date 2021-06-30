/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx ,Heading} from 'theme-ui';
import { Link } from 'components/link';


export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <Heading as='h1'>
          Interior
      </Heading>

    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    h1: {
      fontFamiy:'headingAlt'
    },
  },
};
