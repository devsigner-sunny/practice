import React from "react";
import Card from "./Card";

export default function Cards() {
  const cardList = [
    {
      title: 'Youtube',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    },
    {
      title: 'Facebook',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    },
    {
      title: 'Wikipedia',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    },
    {
      title: 'Reddit',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    },
    {
      title: '@amazon',
      link: 'https://google.com',
      hasIcon: true,
      logo: '/firefox_logo.svg',
    },
    {
      title: 'Twitter',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    },
    {
      title: '@amazon',
      link: 'https://google.com',
      hasIcon: true,
      logo: '/firefox_logo.svg',
    },
    {
      title: 'Twitter',
      link: 'https://google.com',
      hasIcon: false,
      logo: '/firefox_logo.svg',
    }
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
      {cardList.map(
        ({ link, title, hasIcon, logo }, index) => (
          <Card key={index} {...{link, title, hasIcon, logo}} />
        )
      )}
    </div>
  );
}
