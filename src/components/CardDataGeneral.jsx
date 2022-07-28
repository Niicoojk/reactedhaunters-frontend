import React from 'react';
import TotalProducts from './card/TotalProducts';
import TotalTiers from './card/TotalTiers';
import TotalUniverses from './card/TotalUniverses';
import TotalUser from './card/TotalUSer';

function CardDataGeneral() {
  return (
    <>
      <TotalUser />
      <TotalProducts />
      <TotalTiers />
      <TotalUniverses />
    </>
  );
}

export default CardDataGeneral;
