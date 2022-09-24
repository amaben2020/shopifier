import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Label from '../Label';
const ProductItem = ({
  title,
  images,
  availableForSale,
  description,
  ...rest
}) => {
  console.log(rest);
  return (
    <div
      style={{
        padding: 50,
        border: '1px solid #888888',
        borderRadius: 5,
        maxWidth: 490,
        margin: '20px 50px',
      }}
    >
      <h2>{title}</h2>
      <Link href={`/product/${title.toLowerCase().split(' ').join('-')}`}>
        <Image src={images[0].src} height={120} width={600} />
      </Link>
      <Label availableForSale={availableForSale} />
      <p>{description}</p>
    </div>
  );
};

export default ProductItem;
