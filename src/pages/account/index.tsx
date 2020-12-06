import Taro from '@tarojs/taro';
import React, { ComponentClass } from 'react';
import { connect } from 'react-redux';

import { StateType } from '../../models/accountModel';
import { ConnectProps, ConnectState } from '../../models/connect';

import './index.scss';
import { AtAvatar } from 'taro-ui';

interface OwnProps {
  // 父组件要传的prop放这
  value: number;
}
interface OwnState {
  // 自己要用的state放这
}

type IProps = StateType & ConnectProps & OwnProps;
@connect(({ account, loading }: ConnectState) => ({
  ...account,
  ...loading
}))
class Account extends React.Component<IProps, OwnState> {
  componentDidMount() {
    console.log(this.props.accountState);
  }
  render() {
    return (
      <view className="account-page">
        <view className="account-msg-card">
          <AtAvatar className="at-avatar" circle={true} openData={{ type: 'userAvatarUrl' }} size="large" />
          <view className="account-name">王狗蛋</view>
        </view>
        <view className="tools-card"></view>
        <view className="tools-card"></view>
      </view>
    );
  }
}

export default Account as ComponentClass<OwnProps>;
