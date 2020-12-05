import React from 'react';
import Taro from '@tarojs/taro';
import './index.scss';
import ItemList from '../../components/index/ItemList';
import { HonorType } from '../../models/honor';

export default class Index extends React.Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const itemList = [
      {
        title: '奖项 ETS 激励计划',
        description: 'description',
        endData: '2020-12-12'
      },
      {
        title: '奖项 ETS 激励计划',
        description: 'description',
        endData: '2020-12-12'
      },
      {
        title: '奖项 ETS 激励计划',
        description: 'description',
        endData: '2020-12-12'
      },
      {
        title: '奖项 ETS 激励计划',
        description: 'description',
        endData: '2020-12-12'
      },
      {
        title: '奖项 ETS 激励计划',
        description: 'description',
        endData: '2020-12-12'
      }
    ];
    return (
      <view className="content">
        <ItemList itemList={itemList} type={HonorType.HONOR_IN_PROGRESS} />
      </view>
    );
  }
}
