import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import React from 'react';
import { Image } from '@tarojs/components';
import { AtTag } from 'taro-ui';

interface Props {
  item: any;
}

export default class HonorInProgressItem extends React.Component<Props> {
  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
    item: null
  };

  render() {
    const { item } = this.props;
    if (!item) return <view />;
    return (
      <view className="card">
        <Image className="card-up" src="http://www.yzlady.com/upimg/allimg/200411/12-2004111GZ61G.jpg" />
        <view className="card-bottom">
          <view className="card-title">AMS 特别沙雕奖以及特别神经奖以及特别长</view>
          <view className="at-row">
            <view className="at-col at-col-5 card-season">2020 Q2</view>
            <AtTag className="card-status" size="small" type="primary" circle>
              申报中
            </AtTag>
          </view>
          <view className="card-end-date">2020-12-03 截止</view>
        </view>
      </view>
    );
  }
}
