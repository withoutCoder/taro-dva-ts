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
      open: false
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
    const { item } = this.props;
    if (!item) return <view />;
    const teamList = () => {
      return item.honorTeams.map((item) => {
        return (
          <view className="review-honor-team" key={item.teamId}>
            {item.teamName}
          </view>
        );
      });
    };
    const { open } = this.state;
    return (
      <AtAccordion className="review-card" open={open} onClick={this.handleClick.bind(this)} title={item.title}>
        <AtList hasBorder={false}>{teamList()}</AtList>
      </AtAccordion>
    );
  }
}
