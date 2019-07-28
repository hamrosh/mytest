import React from 'react';
import Layout from '../components/Layout';
import Button from '../examples/Button';
const tours = () => {
  return (
    <Layout>
      this is tours list page
      <div>
        <Button big color="yellow">
          Hello From Style
        </Button>
        <Button color="white">SEcond</Button>
      </div>
    </Layout>
  );
};

export default tours;
