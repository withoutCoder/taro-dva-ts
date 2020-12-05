import Taro from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import React from 'react';

interface Props {
  item: any;
}

export default class HonorReviewItem extends React.Component<Props> {
  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = {
    item: null
  };

  render() {
    const { item } = this.props;
    if (!item) return <View />;
    return (
      // <View className='content'>
      //   {item.title}
      // </View>
      <View>
        <div className="cardUp"></div>
        <div className="cardBottom"></div>
      </View>
    );
  }
}
