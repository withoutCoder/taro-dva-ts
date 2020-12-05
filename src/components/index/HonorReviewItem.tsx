import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import React from 'react';
import { AtAccordion, AtList } from 'taro-ui';

interface Props {
  item: any;
}

interface State {
  open: boolean;
}

export default class HonorReviewItem extends React.Component<Props, State> {
  constructor(data) {
    super(data);
    this.state = {
      open: true
    };
  }

  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
    item: null
  };

  handleClick(value: boolean) {
    this.setState({
      open: value
    });
  }

  render() {
    const { open } = this.state;
    return (
      <AtAccordion className="review-card" open={open} onClick={this.handleClick.bind(this)} title="AMS 突出快乐奖">
        <AtList hasBorder={false}>
          <view className="review-honor-team">快乐风男团队</view>
          <view className="review-honor-team">守望先锋娱乐晚间细纹团队</view>
          <view className="review-honor-team">这是一个名字特别特别特别长的团队</view>
        </AtList>
      </AtAccordion>
    );
  }
}
