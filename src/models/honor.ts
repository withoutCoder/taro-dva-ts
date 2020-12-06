export interface Honor {
  title: string;
  season: string;
  endDate: string;
  status: HonorStatus;
}

export enum HonorType {
  HONOR_IN_PROGRESS,
  HONOR_REVIEW
}

export enum HonorStatus {
  HONOR_DECLARING = '申报中',
  HONOR_OVER = '已结束'
}
