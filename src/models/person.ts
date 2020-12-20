export interface Person {
  name: string;
  status: Tag;
  picUrl: string;
}

export enum Tag {
  FRIEND = '朋友',
  RELATIVES = '亲人',
  LOVER = '爱人'
}
