import Taro from '@tarojs/taro';
import React from 'react';
import { AtIcon } from 'taro-ui';

const AddCardItem: React.FC = () => {
  const onCardClick = () => {
    Taro.navigateTo({
      url: `/pages/add-important-man/index`
    });
  };

  return (
    <view className="card-add">
      <AtIcon value="add" size="50" color="#cccccc" onClick={onCardClick} />
    </view>
  );
};

export default AddCardItem;
