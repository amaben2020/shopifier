import React from 'react';

const Label = ({ availableForSale }) => {
  const MESSAGE = {
    true: 'green',
    false: 'red',
  };

  return (
    <div
      style={{
        background: MESSAGE[availableForSale],
        width: 80,
        height: 30,
        textAlign: 'center',
      }}
    >
      {availableForSale ? 'Yeah' : 'Nope'}
    </div>
  );
};

export default Label;
