import Taro from '@tarojs/taro';

import CardItem from './CardItem';
import React from 'react';
import { Person } from '../../models/person';

type Props = {
  itemList: Person[];
};

const ItemList: React.FC<Props> = (props: Props) => {
  const renderDom = () => {
    const { itemList } = props;

    const list = itemList.map((item, index) => {
      return <CardItem key={index} item={item} />;
    });
    return <view className="item-box">{list}</view>;
  };

  return renderDom();
};
export default ItemList;
