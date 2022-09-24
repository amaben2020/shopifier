import React from 'react';
import { client, parseShopifyResponse } from './../../lib/shopifyClient';
const Collections = ({ collection }) => {
  console.log(collection);
  return (
    <div>
      <h2>{collection.title}</h2>
      <h4>{collection.description}</h4>
    </div>
  );
};

export default Collections;

export const getServerSideProps = async (ctx) => {
  console.log(ctx);
  const collections = await client.collection.fetchAll();
  const collection = await collections.find(
    (elem) => elem.handle === ctx.query.collection
  );
  return {
    props: {
      collection: parseShopifyResponse(collection),
    },
  };
};
