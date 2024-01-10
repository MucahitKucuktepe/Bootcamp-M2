import React, { useEffect } from 'react'
import useStock from '../service/useStock';
import { useSelector } from 'react-redux';

const Home = () => {
  const { getFirms } = useStock();
  useEffect(() => {
    getFirms();
  }, []);
  const { firms } = useSelector((state) => state.stock);
  console.log(firms);
  return (
    <div>

    </div>
  )
}

export default Home