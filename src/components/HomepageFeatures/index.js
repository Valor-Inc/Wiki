import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Items',
    img: 'https://vwiki.valorserver.com/api/item/picture/Larry%20Gun',
    description: (
      <>
      Valor has multiple differnt tiers of items, From UT to AR, with hundreds of unique and reworked items there is a lot to keep track of. All gear is sorted by the useable class, rarity, and type.
      </>
    ),
    buttonLink: '/docs/category/items',
  },
  {
    title: 'Valor Info',
    img: 'https://i.imgur.com/HKW5Kyw.png',
    description: (
      <>
        Valor has lots of custom mechanics and features. This section explores different areas of the game such as Custom Classes, Alerts, Custom Stats and much more. 
      </>
    ),
    buttonLink: 'https://wiki.valorserver.com/docs/category/valor-info',
  },
  {
    title: 'Dungeons',
    img: 'https://i.imgur.com/qCstxjS.png',
    description: (
      <>
        You may find dungeon guides here. Dungeon guides are a great way to learn content. You can learn more about Ascended Dungeons and Valors endgame content known as Raids.
      </>
    ),
    buttonLink: '/docs/category/dungeon-guides',
  },
];

function Feature({img, title, description, buttonLink}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={buttonLink} className="button button--secondary button--block">Visit</a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
