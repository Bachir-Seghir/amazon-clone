import React from 'react';
import { useRouter } from 'next/router';

function Card({ title, image }) {
  const router = useRouter();
  const handleCardClick = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/products/[dpt]',
      query: { dpt: title },
    });
  };

  /* if (type === 'multiple-content') {
    return (
      <div className='o-card o-card--multiple'>
        <div className='o-card__wrap'>
          <div className='card__header'>
            <h2>Shop By Category</h2>
          </div>
          <div className='card__body'>
            <a
              href='/'
              className='card__body__item'
              onClick={(e) => handleCardClick(e, type)}>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg'
                alt=''
              />
              <p>Computers & Accessories</p>
            </a>
            <a
              href='/'
              className='card__body__item'
              onClick={(e) => handleCardClick(e, type)}>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg'
                alt=''
              />
              <p>Video Games</p>
            </a>
            <a
              href='/'
              className='card__body__item'
              onClick={(e) => handleCardClick(e, type)}>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg'
                alt=''
              />
              <p>Baby</p>
            </a>
            <a
              href='/'
              className='card__body__item'
              onClick={(e) => handleCardClick(e, type)}>
              <img
                src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg'
                alt=''
              />
              <p>Toys & Games</p>
            </a>
          </div>
          <div className='card__footer'>
            <a href='/'>Shop Now</a>
          </div>
        </div>
      </div>
    );
  } else if (type === 'single-content') {
    */
  return (
    <div className='o-card'>
      <div className='o-card__wrap'>
        <div className='card__header'>
          <h2>{title}</h2>
        </div>
        <div className='card__body'>
          <div className='card__body__item' onClick={handleCardClick}>
            <img src={image} alt='' />
          </div>
        </div>
        <div className='card__footer'>
          <a href='/' onClick={handleCardClick}>
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
