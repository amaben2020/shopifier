import React, { useState } from 'react';
import { client, parseShopifyResponse } from './../../lib/shopifyClient';
const Collections = ({ collection }) => {
  const [qty, setQty] = useState(100);

  console.log(client);

  // const addToCart = () => {
  //   // Create an empty checkout
  //   client.checkout.create().then((checkout) => {
  //     // Do something with the checkout
  //     console.log(checkout);
  //   });
  // };
  return (
    <div>
      <h2>{collection.title}</h2>
      <h4>{collection.description}</h4>

      {/* <button onClick={addToCart} style={{ background: 'teal', width: 60 }}>
        Checkout
      </button> */}
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
