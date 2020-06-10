import {GeneralMetricsDTO} from './generalMetricsDTO';

export interface ProjectDTO {
  projectName: string;
  lastUploadDate: Date;
  generalMetrics: GeneralMetricsDTO;
}
