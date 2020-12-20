import Taro from '@tarojs/taro';

import CardItem from './CardItem';
import React from 'react';
import { Person } from '../../models/person';
import _ from 'lodash';
import AddCardItem from './AddCardItem';

type Props = {
  itemList: Person[];
};

const ItemList: React.FC<Props> = (props: Props) => {
  const renderDom = () => {
    const { itemList = [] } = props;

    const list = itemList.map((item, index) => {
      return <CardItem key={index} item={item} />;
    });
    const addCardItem = <AddCardItem />;
    const finalList = _.concat(list, addCardItem);
    return <view className="item-box">{finalList}</view>;
  };

  return renderDom();
};
export default ItemList;
