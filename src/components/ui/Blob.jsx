import React from 'react';

const Blob = ( {className})  => {
    return (
        <svg
        id="visual"
        viewBox="0 0 1200 1300"
        width="880"
        height="1200"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className={`blob ${className}`}
      >
        <g transform="translate(927.4519875387796 -111.9512848530959)">
          <path
            d="M648.8 -752.4C919.6 -545.9 1272.3 -416.2 1356.5 -200.5C1440.7 15.3 1256.4 317.2 1074.3 608.8C892.3 900.4 712.4 1181.7 443.3 1327C174.2 1472.2 -184.1 1481.3 -364.5 1290.3C-544.9 1099.4 -547.4 708.5 -624.9 430.5C-702.4 152.5 -854.9 -12.6 -829.6 -144.5C-804.2 -276.4 -601 -375.2 -433.1 -599.8C-265.2 -824.3 -132.6 -1174.7 28.2 -1208.3C189 -1241.9 378 -958.8 648.8 -752.4"
            fill="#143892"
          ></path>
        </g>
      </svg>
    );
}

export default Blob;