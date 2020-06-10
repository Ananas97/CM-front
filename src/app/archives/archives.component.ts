import {Component, OnInit} from '@angular/core';
import {ProjectDTO} from '../model/projectDTO';
import {ApiService} from '../shared/ApiService';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {ClassMetricsDTO} from '../model/classMetricsDTO';
import {FunctionMetricsDTO} from '../model/functionMetricsDTO';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArchivesComponent implements OnInit {

  displayedColumns: string[] = ['projectName', 'lastUpdateDate'];
  classMetricsDisplayedColumns: string[] = ['name', 'numberOfLines', 'numberOfComments', 'numberOfChildren', 'depthOfInheritance', 'weightedMethods'];
  functionMetricsDisplayedColumns: string[] = ['name', 'numberOfLines', 'numberOfComments', 'nestedBlockDepth'];
  state: {
    dataSource: MatTableDataSource<ProjectDTO>;
    expandedProject: ProjectDTO | null;
    expandedClassMetric: ClassMetricsDTO | null;
    // expandedFunctionMetric: FunctionMetricsDTO | null;
  };


  constructor(private apiService: ApiService) {
    this.state = {
      // dataSource: ELEMENT_DATA,
      dataSource: new MatTableDataSource<ProjectDTO>([]),
      // displayedColumns: ['projectName', 'lastUploadDate'],
      expandedProject: null,
      expandedClassMetric: null,
      // expandedFunctionMetric: null
    };
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // this.snackBar.open('Data is being loaded, please wait...');
    this.state.dataSource.data = ELEMENT_DATA;
    // this.apiService.getProjectList().subscribe(res => {
    //     this.state.dataSource.data = res;
    //     this.snackBar.dismiss();
    //   }, error => {
    //     this.snackBar.dismiss();
    //     this.snackBar.open('An error has occurred', 'Close');
    //   }
    // );
  }
}

const ELEMENT_DATA: ProjectDTO[] = [
  {
    projectName: 'name1', lastUploadDate: null, generalMetrics: {
      numberOfLines: 1, numberOfComments: 1, numberOfNamespaces: 1, numberOfClasses: 1,
      classMetricsList: [{
        name: 'className',
        numberOfLines: 1,
        depthOfInheritance: 1,
        functionMetricsList: null,
        numberOfChildren: 1,
        numberOfComments: 1,
        weightedMethods: 1
      }],
    }
  },
  {
    projectName: 'name2', lastUploadDate: null, generalMetrics: {
      numberOfLines: 1, numberOfComments: 1, numberOfNamespaces: 1, numberOfClasses: 1,
      classMetricsList: [{
        name: 'className',
        numberOfLines: 1,
        depthOfInheritance: 1,
        functionMetricsList: [{name: 'function', numberOfLines: 2137, numberOfComments: 3, nestedBlockDepth: 80}],
        numberOfChildren: 1,
        numberOfComments: 1,
        weightedMethods: 1
      }],
    }
  },
];
