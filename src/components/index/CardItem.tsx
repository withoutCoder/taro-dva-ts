import Taro from '@tarojs/taro';
import { Image } from '@tarojs/components';
import { AtTag } from 'taro-ui';
import { Person, Tag } from '../../models/person';
import React from 'react';

type Props = {
  item: Person;
};

const CardItem: React.FC<Props> = (props: Props) => {
  const onCardClick = () => {
    Taro.navigateTo({
      url: `/pages/reminds/index`
    });
  };

  const renderDom = () => {
    const { item } = props;
    if (!item) return <view />;

    const statusBackgroundColor = () => {
      switch (item.status) {
        case Tag.FRIEND:
          return '#e3f3db';
        case Tag.RELATIVES:
          return '#f8f2e9';
        case Tag.LOVER:
          return '#f8e6ed';
      }
    };

    const statusFontColor = () => {
      switch (item.status) {
        case Tag.FRIEND:
          return '#90CC70';
        case Tag.RELATIVES:
          return '#D1AF7C';
        case Tag.LOVER:
          return '#f12c8a';
      }
    };

    return (
      <view className="card" onClick={onCardClick}>
        <Image className="card-up" src={item.picUrl} mode="aspectFill" />
        <view className="card-bottom">
          <view className="at-row at-row__justify--between">
            <view className="card-end-date">{item.name}</view>
            <AtTag className="card-status" customStyle={{ background: statusBackgroundColor(), color: statusFontColor() }} size="small">
              {item.status}
            </AtTag>
          </view>
        </view>
      </view>
    );
  };

  return renderDom();
};

export default CardItem;
