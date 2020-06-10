import {FunctionMetricsDTO} from './functionMetricsDTO';

export interface ClassMetricsDTO {
  name: string;
  numberOfLines: number;
  numberOfComments: number;
  numberOfChildren: number;
  depthOfInheritance: number;
  weightedMethods: number;
  functionMetricsList: FunctionMetricsDTO[];
}
