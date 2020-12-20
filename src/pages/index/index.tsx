import React from 'react';
import Taro from '@tarojs/taro';
import './index.scss';
import ItemList from '../../components/index/ItemList';
import { Person, Tag } from '../../models/person';

interface Props {}

interface State {
  cardList: Person[];
}

export default class Index extends React.Component<Props, State> {
  constructor(data) {
    super(data);
    this.state = {
      cardList: []
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.getHonorInProgressList();
  }

  getHonorInProgressList() {
    this.setState({
      cardList: [
        {
          name: '爸爸',
          status: Tag.RELATIVES,
          picUrl: 'http://p2.ifengimg.com/a/2019_24/4936dac22a0ea46_size355_w1920_h1255.jpg'
        },
        {
          name: '妈妈',
          status: Tag.RELATIVES,
          picUrl: 'https://cw1.tw/CP/images/article/P1418971976422.jpg'
        },
        {
          name: '老姐',
          status: Tag.FRIEND,
          picUrl: 'http://m.imeitou.com/uploads/allimg/2019082012/t5mhh2bbfk4.jpg'
        },
        {
          name: '女朋友',
          status: Tag.LOVER,
          picUrl: 'http://m.imeitou.com/uploads/allimg/2019082012/zafffbr2rfm.jpg'
        }
      ]
    });
  }

  render() {
    const { cardList } = this.state;
    return (
      <view className="content">
        <view className="panel">
          <ItemList itemList={cardList} />
        </view>
      </view>
    );
  }
}
