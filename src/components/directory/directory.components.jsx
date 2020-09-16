import React from 'react';
import { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

function Directory(){
    const [sections] = useState([
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          size: 'large',
          id: 1,
          linkUrl: '/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size: 'large',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size: 'large',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]);

    return(
        <div className='directory-menu'>
            {sections.map(({id, ...otherSectionProps})  => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )

}

export default Directory;