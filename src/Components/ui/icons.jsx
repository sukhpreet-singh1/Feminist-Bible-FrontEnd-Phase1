import Link from 'next/link';
import React from 'react';

// eslint-disable react/prop-types
export default function CityLogo({ link, linkTo, width, height }) {
  const template = (
    <div
      className="img_cover"
      style={{
        width,
        height,
        background: `url('/images/logos/manchester_city_logo.png') no-repeat`
      }}
    />
  );

  if (link) {
    return <Link href={linkTo}>{template}</Link>;
  }
  return template;
}
