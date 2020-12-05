import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';

import HonorInProgressItem from './HonorInProgressItem';
import HonorReviewItem from './HonorReviewItem';
import { Honor, HonorType } from '../../models/honor';
import React from 'react';

interface Props {
  itemList: Honor[];
  type: any;
}

export default class ItemList extends React.Component<Props> {
  static propTypes = {
    type: HonorType,
    itemList: PropTypes.array
  };

  static defaultProps = {
    itemList: []
  };

  componentWillMount() {}

  render() {
    const { itemList, type } = this.props;
    switch (type) {
      case HonorType.HONOR_IN_PROGRESS: {
        const list = itemList.map((item, index) => {
          return <HonorInProgressItem key={index} item={item} />;
        });
        return <view className="item-box">{list}</view>;
      }
      case HonorType.HONOR_REVIEW: {
        const list = itemList.map((item, index) => {
          return (
            <view key={index}>
              <HonorReviewItem item={item} />
            </view>
          );
        });
        return <view>{list}</view>;
      }
    }
  }
}
