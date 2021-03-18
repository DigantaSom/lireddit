import Layout from '../components/Layout';
import { withApollo } from '../utils/withApollo';

const Index = () => {
  return (
    <Layout>
      <h1>LiReddit</h1>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
