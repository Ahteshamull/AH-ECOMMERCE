import React from "react";
import Container from "../layout/Container";
import ShopSidebar from "./../Component/ShopSidebar";
import AllProducts from "./../Component/AllProducts";

const Shop = () => {
  return (
    <section className="mt-10 mb-10">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <ShopSidebar />
          </div>

          <div className="col-span-9">
            <AllProducts />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
