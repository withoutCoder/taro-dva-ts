import React from 'react';
import Taro from '@tarojs/taro';
import './index.scss';
import ItemList from '../../components/index/ItemList';
import { Honor, HonorStatus, HonorType } from '../../models/honor';

interface Props {}

interface State {
  honorInProgressList: Honor[];
  honorReviewList: any;
}

export default class Index extends React.Component<Props, State> {
  constructor(data) {
    super(data);
    this.state = {
      honorInProgressList: [],
      honorReviewList: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getHonorInProgressList();
    this.getHonorReviewList();
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getHonorInProgressList() {
    this.setState({
      honorInProgressList: [
        {
          title: 'AMS 特别沙雕奖以及特别神经奖以及特别长',
          season: '2020 Q1',
          endDate: '2020-12-12',
          status: HonorStatus.HONOR_DECLARING
        },
        {
          title: '奖项 ETS 激励计划',
          season: '2020 Q2',
          endDate: '2020-11-12',
          status: HonorStatus.HONOR_ANNOUNCED
        },
        {
          title: 'AMS 特别沙雕奖以及特别神经奖以及特别长',
          season: '2020 Q3',
          endDate: '2020-10-12',
          status: HonorStatus.HONOR_UNDER_REVIEW
        },
        {
          title: 'AMS 特别沙雕奖以及特别神经奖以及特别长',
          season: '2020 Q1',
          endDate: '2020-12-15',
          status: HonorStatus.HONOR_DECLARING
        },
        {
          title: '奖项 ETS 激励计划',
          season: '2020 Q4',
          endDate: '2020-12-21',
          status: HonorStatus.HONOR_UNDER_REVIEW
        }
      ]
    });
  }

  getHonorReviewList() {
    this.setState({
      honorReviewList: [
        {
          title: '奖项 ETS 激励计划',
          honorTeams: [
            {
              teamName: '快乐风男团队',
              teamId: ''
            },
            {
              teamName: '守望先锋娱乐晚间细纹团队',
              teamId: ''
            }
          ]
        },
        {
          title: '奖项 ETS 激励计划',
          honorTeams: [
            {
              teamName: '快乐风男团队',
              teamId: ''
            },
            {
              teamName: '守望先锋娱乐晚间细纹团队',
              teamId: ''
            }
          ]
        },
        {
          title: '奖项 ETS 激励计划',
          honorTeams: [
            {
              teamName: '快乐风男团队',
              teamId: ''
            },
            {
              teamName: '守望先锋娱乐晚间细纹团队',
              teamId: ''
            }
          ]
        }
      ]
    });
  }

  render() {
    const { honorReviewList, honorInProgressList } = this.state;
    return (
      <view className="content">
        <view className="at-article__h2">正在进行</view>
        <ItemList itemList={honorInProgressList} type={HonorType.HONOR_IN_PROGRESS} />
        <view className="at-article__h2">荣誉回顾</view>
        <ItemList itemList={honorReviewList} type={HonorType.HONOR_REVIEW} />
      </view>
    );
  }
}
