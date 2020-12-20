import Taro from '@tarojs/taro';
import React, { useEffect, useState } from 'react';
import './index.scss';
import { AtSwitch } from 'taro-ui';
import { getCurrentInstance } from '@tarojs/taro';
import { Image } from '@tarojs/components';

const Index: React.FC = () => {
  // const [remindList, setRemindList] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [picUrl, setPicUrl] = useState<any>('');

  useEffect(() => {
    if (getCurrentInstance() != null && getCurrentInstance().router) {
      // @ts-ignore
      const params = getCurrentInstance().router.params;
      const { picUrl } = params;
      picUrl && setPicUrl(params.picUrl);
    }
  });

  const handleChange = (value) => {
    setOpen(value);
  };

  return (
    <view className="content">
      <view className="remind-panel">
        <view className="at-row at-row__justify--between">
          <Image className="avatar" src={picUrl} mode="aspectFill" />
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
