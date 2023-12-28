import React from 'react';

class Marquee extends React.Component {
  render() {
    const items = [
      { label: 'DANGCEM', link: 'https://example.com/dangcem' },
      { label: 'GUARANTY', link: 'https://example.com/guaranty' },
      { label: 'UBAF', link: 'https://example.com/ubaf' },
      { label: 'BNH', link: 'https://example.com/bnh' },
      { label: 'ZENITH', link: 'https://example.com/zenith' },
      { label: 'BANK', link: 'https://example.com/bank' },
      { label: 'NB', link: 'https://example.com/nb' },
      { label: 'ACCESS', link: 'https://example.com/access' },
      { label: 'NESTLE', link: 'https://example.com/nestle' },
      { label: 'SEPLAT', link: 'https://example.com/seplat' },
      { label: 'GUARANTY', link: 'https://example.com/guaranty2' },
      { label: 'DANGCEM', link: 'https://example.com/dangcem2' },
      { label: 'GUARANTY', link: 'https://example.com/guaranty3' },
      { label: 'UBAF', link: 'https://example.com/ubaf2' },
      { label: 'BNH', link: 'https://example.com/bnh2' },
    ];

    return (
      <div className="w-full overflow-hidden">
        <div className="marquee">
          {items.map((item, index) => (
            <div key={index} className="flex justify-center  items-center">
              <a href={item.link} className="text-white text-sm px-3 ">
                {item.label}
              </a>
              <div className="bg-green-900 w-3 h-3"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default function StockRecommendation() {
  return (
    <div className="bg-dark text-white w-full flex h-[3rem]">
      <div className="px-4 uppercase w-[20%] text-sm gap-4 flex justify-start items-center">Stock Recommendations <img src="https://res.cloudinary.com/phantom1245/image/upload/v1703193506/investment-one/Vector_1_ydkxvq.png" alt="" /></div>
      <div className=" w-[80%] flex justify-center items-center ">
        <Marquee />
      </div>
    </div>
  );
}
