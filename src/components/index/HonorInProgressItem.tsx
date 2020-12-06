import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import React from 'react';
import { Image } from '@tarojs/components';
import { AtTag } from 'taro-ui';
import { HonorStatus } from '../../models/honor';

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
    const statusBackgroundColor = () => {
      switch (item.status) {
        case HonorStatus.HONOR_DECLARING:
          return '#5c91fd';
        case HonorStatus.HONOR_OVER:
          return '#e8e8e8';
      }
    };
    const statusFontColor = () => {
      switch (item.status) {
        case HonorStatus.HONOR_DECLARING:
          return '#ffffff';
        case HonorStatus.HONOR_OVER:
          return '#333333';
      }
    };
    return (
      <view className="card">
        <Image className="card-up" src="http://www.yzlady.com/upimg/allimg/200411/12-2004111GZ61G.jpg" />
        <view className="card-bottom">
          <view className="card-title">{item.title}</view>
          <view className="at-row">
            <view className="at-col at-col-5 card-season">{item.season}</view>
            <AtTag
              className="card-status"
              customStyle={{ background: statusBackgroundColor(), color: statusFontColor() }}
              size="small"
              type="primary"
              circle
            >
              {item.status}
            </AtTag>
          </view>
          <view className="card-end-date">{item.endDate} 截止</view>
        </view>
      </view>
    );
  }
}
