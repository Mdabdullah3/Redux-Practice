import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fechingData } from "../Redux/actionCreators/productAction";
import { FETCHING_LOADING } from "../Redux/actionTypes/actionTypes";

const Home = () => {
  const product = useSelector(state => state.product)
  const loading = useSelector(state => state.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCHING_LOADING })
    fetch('products.json')
      .then(res => res.json())
      .then(data => dispatch(fechingData(data)))
  }, [dispatch])

  let content;

  if (loading) {
    content = <h1>Loading</h1>
  }

  if (!loading && product.length) {
    content = product.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {
        content
      }
    </div>
  );
};

export default Home;
