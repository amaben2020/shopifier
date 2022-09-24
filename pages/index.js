import Link from 'next/link';
import ProductItem from '../components/ProductItem';
import { client, parseShopifyResponse } from './../lib/shopifyClient';
const HomePage = (props) => {
  const { info, policies, products, collections } = props;
  console.log(info);
  console.log(products);
  console.log(policies);
  console.log(collections);
  return (
    <div>
      <nav>
        {collections.map((c) => (
          <span style={{ margin: 50 }}>
            <Link href={`/collection/${c.handle}`}>{c.handle}</Link>
          </span>
        ))}
      </nav>
      <h1>
        Policies : {policies.id} - {policies.type.name}
      </h1>
      {products.map((product) => (
        <ProductItem {...product} />
      ))}
    </div>
  );
};
export const getServerSideProps = async () => {
  const products = await client.product.fetchAll(); // Fetch product
  const collections = await client.collection.fetchAll();
  const infos = await client.shop.fetchInfo(); // Fetch shop Info if you think about SEO and title and ... to your page
  const policies = await client.shop.fetchPolicies(); // fetch shop policy if you have any
  return {
    props: {
      infos: parseShopifyResponse(infos),
      policies: parseShopifyResponse(policies),
      products: parseShopifyResponse(products),
      collections: parseShopifyResponse(collections),
    },
  };
};

export default HomePage;
