import Taro from '@tarojs/taro';
import React from 'react';
import './index.scss';

const Index: React.FC = () => {
  return (
    <view className="content">
      <view className="remind-panel">
        <view className="remind-box">
          <view className="at-row at-row__justify--between">
            <view className="remind-detail">100天纪念日</view>
          </view>
        </view>
      </view>
    </view>
  );
};

export default Index;
