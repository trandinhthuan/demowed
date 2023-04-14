import React, { useState, useEffect } from "react";

import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const formatPrice = (price) => {
    const f = new Intl.NumberFormat("vi-vn", {
      style: "currency",
      currency: "VND",
    });

    return f.format(price);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://63f3daa4864fb1d6001eedae.mockapi.io/api/products", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        }
      })
      .then((it) => {
        setProducts(it);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  let filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <li className="header-search">
        <form>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
      <ul className="product-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading products. Please try again later.</p>
        ) : searchTerm ? (
          !!filteredProducts.length ? (
            filteredProducts.map((product) => (
              <li className="product-frame" key={product.id}>
                <img src={product.image[0]} alt={product.name} />
                <h3>
                  <a href={product.url}>{product.name}</a>
                </h3>
                <p>{formatPrice(product?.options?.[0]?.info[0]?.price || 0)}</p>
                <hr />
              </li>
            ))
          ) : (
            <p className="not-found">Không Tìm Thấy Sản Phẩm Liên Quan</p>
          )
        ) : null}
      </ul>
    </div>
  );
}

export default SearchBar;
