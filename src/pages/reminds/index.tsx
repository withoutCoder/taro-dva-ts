import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import './index.scss';
import { AtSwitch } from 'taro-ui';

const Index: React.FC = () => {
  // const [remindList, setRemindList] = useState<any>([]);
  const [open, setOpen] = useState(false);

  const handleChange = (value) => {
    setOpen(value);
  };

  return (
    <view className="content">
      <view className="remind-panel">
        <view className="at-row at-row__justify--between">
          <view className="avatar"></view>
          <view className="text-desc">她的微笑是我世界的解药</view>
        </view>
        <view className="remind-box">
          <view className="at-row at-row__justify--between">
            <view className="remind-detail">给他写信</view>
            <AtSwitch checked={open} onChange={handleChange} />
          </view>
        </view>
        <view className="remind-box">
          <view className="at-row at-row__justify--between">
            <view className="remind-detail">生日提醒</view>
            <AtSwitch checked={open} onChange={handleChange} />
          </view>
        </view>
        <view className="remind-box">
          <view className="at-row at-row__justify--between">
            <view className="remind-detail">纪念日提醒</view>
            <AtSwitch checked={open} onChange={handleChange} />
          </view>
        </view>
        <view className="remind-box">
          <view className="at-row at-row__justify--between">
            <view className="remind-detail">100天纪念日</view>
            <AtSwitch checked={open} onChange={handleChange} />
          </view>
        </view>
      </view>
    </view>
  );
};

export default Index;
