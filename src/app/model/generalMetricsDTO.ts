import {ClassMetricsDTO} from './classMetricsDTO';

export interface GeneralMetricsDTO {
  numberOfLines: number;
  numberOfComments: number;
  numberOfNamespaces: number;
  numberOfClasses: number;
  classMetricsList: ClassMetricsDTO[];
}
