/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {MongoQueryDetailsComponent} from './mongo-query-details.component';
import {LoadSparklinesDirective} from '../shared/load-sparklines.directive';
import {MapToIterablePipe} from '../shared/map-to-iterable.pipe';
import {NgbAccordionConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HumanizePipe} from '../shared/humanize.pipe';
import {HttpModule} from '@angular/http';
import {LatencyChartDirective} from '../shared/latency-chart.directive';
import {ClipboardModule} from 'ngx-clipboard';
import {FormsModule} from '@angular/forms';
import {Instance, InstanceService} from '../core/instance.service';
import {RouterTestingModule} from '@angular/router/testing';
import {ActivatedRoute} from '@angular/router';
import {MongoQueryDetailsService} from './mongo-query-details.service';

describe('MongoQueryDetailsComponent', () => {
  let component: MongoQueryDetailsComponent;
  let fixture: ComponentFixture<MongoQueryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MongoQueryDetailsComponent,
        HumanizePipe,
        LoadSparklinesDirective,
        LatencyChartDirective,
        MapToIterablePipe
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ClipboardModule, RouterTestingModule, HttpModule, NgbModule],
      providers: [
        InstanceService,
        MongoQueryDetailsService,
        NgbAccordionConfig,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {
                from: '1527630870872',
                queryID: 'E477191F9BF35C18',
                theme: '',
                to: '1527674070873',
                type: 'mongo',
                tz: '',
                'var-host': 'MongoDB',
              }
            }
          }
        },
        {
          provide: InstanceService,
          useValue: {
            dbServers: [{
              Agent: {
                Created: '2018-05-21T09:11:01Z', DSN: '', Deleted: '0001-01-01T00:00:00Z', Distro: '', Id: 0, Name: '3012cabc90ab',
                ParentUUID: 'ef6987220c804aca452d7d36f33d3872', Subsystem: 'agent', UUID: '696720d2db10400f537caeb90fa1faaf',
                Version: '1.0.5'
              },
              Created: '2018-05-24T10:17:18Z', DSN: 'root:***@tcp(localhost:3306)', Deleted: '1970-01-01T00:00:01Z',
              Distro: 'MySQL Community Server - GPL', Id: 0, Name: 'MySQL57', ParentUUID: 'ef6987220c804aca452d7d36f33d3872',
              Subsystem: 'mongo', UUID: '6623a82c865d402a5debe7c13efbda64', Version: '8.0.11'
            }]
          },
        }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoQueryDetailsComponent);
    component = fixture.componentInstance;
    component.queryDetails = {
      Begin: '2018-06-11T14:13:53Z',
      End: '2018-06-12T14:13:53Z',
      Example: {
        Db: '',
        InstanceUUID: '',
        Period: '2018-06-11T00:00:00Z',
        Query:
          'SELECT EVENT_NAME, COUNT_STAR, SUM_TIMER_WAIT↵	  FROM performance_schema.events_waits_summary_global_by_event_name',
        QueryId: '',
        QueryTime: 1528730000,
        Ts: '2018-06-11T15:28:28Z',
      },
      InstanceId: '595ad9076a1341a5609792d7253d7126',
      Metrics2: {
        Bytes_sent_avg: 0,
        Bytes_sent_max: 0,
        Bytes_sent_med: 0,
        Bytes_sent_min: 0,
        Bytes_sent_p95: 0,
        Bytes_sent_sum: 0,
        Full_scan_sum: 1754,
        Full_scan_sum_of_total: 0.019766275,
        Full_scan_sum_per_query: 1,
        Full_scan_sum_per_sec: 0.020300927,
        Lock_time_avg: 0,
        Lock_time_max: 0,
        Lock_time_med: 0,
        Lock_time_min: 0,
        Lock_time_p95: 0,
        Lock_time_sum: 0.323221,
        Lock_time_sum_of_total: 1.752181,
        Lock_time_sum_per_sec: 0.0000037409839,
        Point: 0,
        Query_count: 1754,
        Query_count_of_total: 0.010574419,
        Query_count_per_sec: 0.020300927,
        Query_time_avg: 0.010376815,
        Query_time_max: 18446744,
        Query_time_med: 0,
        Query_time_min: 0.0031904,
        Query_time_p95: 0,
        Query_time_sum: 19.563963,
        Query_time_sum_of_total: 0.03459275,
        Query_time_sum_per_sec: 0.00022643476,
        Rows_examined_avg: 0,
        Rows_examined_max: 0,
        Rows_examined_med: 0,
        Rows_examined_min: 0,
        Rows_examined_p95: 0,
        Rows_examined_sum: 620916,
        Rows_examined_sum_of_total: 0.027892668,
        Rows_examined_sum_per_rows: 1,
        Rows_examined_sum_per_sec: 7.1865277,
        Rows_sent_avg: 0,
        Rows_sent_max: 0,
        Rows_sent_med: 0,
        Rows_sent_min: 0,
        Rows_sent_p95: 0,
        Rows_sent_sum: 620916,
        Rows_sent_sum_of_total: 0.044020236,
        Rows_sent_sum_per_sec: 7.1865277,
        Ts: '0001-01-01T00:00:00Z',
      },
      Query: {
        Abstract: 'SELECT performance_schema.events_waits_summary_global_by_event_name',
        Fingerprint:
        'SELECT `EVENT_NAME` , `COUNT_STAR` , `SUM_TIMER_WAIT` FROM `performance_schema` . ' +
        '`events_waits_summary_global_by_event_name`',
        FirstSeen: '2018-06-11T08:39:00Z',
        Id: 'B32023956BDC8890',
        LastSeen: '2018-06-11T15:29:28Z',
        Status: 'new',
        Tables: [
          {
            Db: 'performance_schema',
            Table:
              'events_waits_summary_global_by_event_name'
          }
        ]
      },
      Sparks2: [{Point: 1, Ts: '2018-06-12T13:49:53Z'}, {Point: 2, Ts: '2018-06-12T13:25:53Z'}],
    };
    fixture.detectChanges();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create fields with information about query', () => {
    component.isSummary = false;
    fixture.detectChanges();
    const spanAbstract = fixture.nativeElement.querySelector('.query-abstract');
    const spanId = fixture.nativeElement.querySelector('.query-id');
    expect(spanAbstract.innerHTML).toBe(component.queryDetails.Query.Abstract);
    expect(spanId.innerHTML).toBe(component.queryDetails.Query.Id);
  });

  it('should display information about first seen and last seen query', () => {
    component.isSummary = false;
    fixture.detectChanges();
    const firstSeenTimeRange = fixture.nativeElement.querySelector('.first-seen-range');
    expect(firstSeenTimeRange).toBeTruthy();
  });

  it('should display server summery if summery option is selected', () => {
    component.isSummary = true;
    fixture.detectChanges();
    const summaryHeader = fixture.nativeElement.querySelector('.summary-header');
    expect(summaryHeader).toBeTruthy();
    expect(summaryHeader.innerHTML).toBe('Server Summary');
  });

  it('should display additional information about selected query', () => {
    component.isSummary = false;
    fixture.detectChanges();
    const spanAbstract = fixture.nativeElement.querySelector('.sections-wrapper');
    expect(spanAbstract).toBeTruthy();
  });

  it('should not display additional information about selected query', () => {
    component.isSummary = true;
    fixture.detectChanges();
    const spanAbstract = fixture.nativeElement.querySelector('.sections-wrapper');
    expect(spanAbstract).toBeFalsy();
  });

  it('should display fingerprint output if fingerprint is correct', () => {
    component.queryDetails.Query.Fingerprint = 'queryFingerprint';
    const fingerprintOutput = fixture.nativeElement.querySelector('#query-fingerprint-header');
    expect(fingerprintOutput).toBeFalsy();
  });

  it('should not display fingerprint output if fingerprint is null', () => {
    component.queryDetails.Query.Fingerprint = null;
    const fingerprintOutput = fixture.nativeElement.querySelector('#query-fingerprint-header');
    expect(fingerprintOutput).toBeFalsy();
  });

  it('should not display fingerprint output if fingerprint is undefined', () => {
    component.queryDetails.Query.Fingerprint = undefined;
    const fingerprintOutput = fixture.nativeElement.querySelector('#query-fingerprint-header');
    expect(fingerprintOutput).toBeFalsy();
  });

  it('should create Query section if data is correct', () => {
    component.isSummary = false;
    component.queryExample = 'testQueryExample';
    fixture.detectChanges();
    const queryFingerprint = fixture.nativeElement.querySelector('#query-fingerprint-header');
    const queryExample = fixture.nativeElement.querySelector('#query-example-header');
    expect([queryFingerprint, queryExample]).toBeTruthy();
  });

  it('should create Json Explain section if data is correct', () => {
    component.queryExample = 'testQueryExample';
    component.isExplainLoading = false;
    component.errExplain = '';
    component.jsonExplain = 'data';
    fixture.detectChanges();
    const jsonExplain = fixture.nativeElement.querySelector('#json-explain-header');
    expect(jsonExplain).toBeTruthy();
  });

  it('should not create Explain section if data is undefined', () => {
    component.jsonExplain = undefined;
    fixture.detectChanges();
    const jsonExplain = fixture.nativeElement.querySelector('#json-explain-header');
    expect(jsonExplain).toBeFalsy();
  });

  it('should not create Explain section if error is presented', () => {
    component.errExplain = 'error';
    fixture.detectChanges();
    const jsonExplain = fixture.nativeElement.querySelector('#json-explain-header');
    expect(jsonExplain).toBeFalsy();
  });

  it('should be truthy if total query is not selected', () => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.queryParams = {
      from: '1242341241',
      to: '9991283',
      'var-host': 'MySQL67',
      search: 'sda',
      queryID: 'TOTAL',
      tz: 'tz',
      theme: 'dark',
      first_seen: false,
    };
    component.onChangeParams(component.queryParams);
    fixture.detectChanges();
    expect(component.isSummary).toBeTruthy();
  });

  it('should be truthy if query is undefined', () => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.queryParams = {
      from: '1242341241',
      to: '9991283',
      'var-host': 'MySQL67',
      search: 'sda',
      queryID: undefined,
      tz: 'tz',
      theme: 'dark',
      first_seen: false,
    };
    component.onChangeParams(component.queryParams);
    fixture.detectChanges();
    expect(component.isSummary).toBeTruthy();
  });

  it('should be false if query is not total', () => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.queryParams = {
      from: '1242341241',
      to: '9991283',
      'var-host': 'MySQL67',
      search: 'sda',
      queryID: 'adasdfee',
      tz: 'tz',
      theme: 'dark',
      first_seen: false,
    };
    component.onChangeParams(component.queryParams);
    fixture.detectChanges();
    expect(component.isSummary).toBeFalsy();
  });

  it('onChangeParams() should return false if dbServer is null', () => {
    component.dbServer = null;
    component.queryParams = {
      from: '1527630870872',
      queryID: 'E477191F9BF35C18',
      theme: 'dark',
      to: '1527674070873',
      tz: 'browser',
      'var-host': 'MongoDB',
    };
    const result = component.onChangeParams(component.queryParams);
    fixture.detectChanges();
    expect(result).toBeFalsy();
  });

  it('getExplain() should return false if dbServer is null', (done) => {
    component.dbServer = null;
    fixture.detectChanges();
    component.getExplain().then((data) => {
      expect(data).toBeFalsy();
      done();
    });
  });

  it('getExplain() should return false if dbServer.Agent is null', async(() => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: null
    };
    fixture.detectChanges();
    component.getExplain().then((data) => {
      expect(data).toBeFalsy();
    });
  }));

  it('should call getDBName() and getTableName() if dbTblNames is empty string', () => {
    const getDBNameSpy = spyOn(component, 'getDBName');
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.queryDetails.Query.Tables = [
      {
        Db: 'performance_schema',
        Table:
          'events_waits_summary_global_by_event_name'
      }
    ];
    component.dbName = '';
    component.getExplain();
    fixture.detectChanges();
    expect(getDBNameSpy).toHaveBeenCalled();
  });

  it('should not call getDBName if dbName is presented', () => {
    const getDBNameSpy = spyOn(component, 'getDBName');
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.dbName = 'dbName';
    component.getExplain();
    fixture.detectChanges();
    expect(getDBNameSpy).not.toHaveBeenCalled();
  });

  it('should return Db name if it presented', () => {
    component.queryDetails.Example.Db = 'performance_schema';
    const result = component.getDBName();
    fixture.detectChanges();
    expect(result).toEqual('performance_schema');
  });

  it('should return empty string if queryDetails.Query.Tables is null', () => {
    component.queryDetails.Query.Tables = null;
    const result = component.getDBName();
    fixture.detectChanges();
    expect(result).toEqual('');
  });

  it('should return performance_schema string if queryDetails.Query.Tables is presented', () => {
    component.queryDetails.Query.Tables = [
      {
        Db: 'performance_schema',
        Table:
          'events_waits_summary_global_by_event_name'
      }
    ];
    const result = component.getDBName();
    fixture.detectChanges();
    expect(result).toEqual('performance_schema');
  });

  it('should return empty string if queryDetails.Query.Tables is empty array', () => {
    component.queryDetails.Query.Tables = [];
    const result = component.getDBName();
    fixture.detectChanges();
    expect(result).toEqual('');
  });

  it('should return Db name if it presented', () => {
    component.queryDetails.Example.Db = 'performance_schema';
    const result = component.getDBName();
    fixture.detectChanges();
    expect(result).toEqual('performance_schema');
  });

  it('should return empty string if queryDetails.Query.Tables is null', () => {
    component.queryDetails.Query.Tables = null;
    const result = component.getTableName();
    fixture.detectChanges();
    expect(result).toEqual('');
  });

  it('should return performance_schema string if queryDetails.Query.Tables is presented', () => {
    component.queryDetails.Query.Tables = [
      {
        Db: 'performance_schema',
        Table:
          'events_waits_summary_global_by_event_name'
      }
    ];
    const result = component.getTableName();
    fixture.detectChanges();
    expect(result).toEqual('events_waits_summary_global_by_event_name');
  });

  it('should be false if all promise data is true and has been loaded', (done) => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    component.fromUTCDate = '2018-08-23T08:45:59Z';
    component.toUTCDate = '2018-10-23T08:45:59Z';
    const val = {
      Begin: '2018-09-22T21:59:55Z',
      End: '2018-09-23T09:59:55Z',
      Example: {
        Db: '',
        InstanceUUID: '',
        Period: '0001-01-01T00:00:00Z',
        Query: {
          'ns': 'local.oplog.rs',
          'op': 'getmore',
          'query': {
            'getMore': {'$numberLong': 35133673781},
            'collection': 'oplog.rs',
            'maxTimeMS': {'$numberLong': 5000},
            'term': {'$numberLong': 743},
            'lastKnownCommittedOpTime': {'ts': {'$timestamp': {'t': 1537774671, 'i': 1}}, 't': {'$numberLong': 743}}
          },
          'originatingCommand': {
            'find': 'oplog.rs',
            'filter': {'ts': {'$gte': {'$timestamp': {'t': 1518762420, 'i': 1}}}},
            'tailable': true,
            'oplogReplay': true,
            'awaitData': true,
            'maxTimeMS': {'$numberLong': 60000},
            'term': {'$numberLong': 743}
          }
        },
        QueryId: '',
        QueryTime: 0,
        Ts: '0001-01-01T00:00:00Z',
      },
      InstanceId: '173a02eadfd04bea72d0674faaee734a',
      Metrics: null,
      Metrics2: {
        Bytes_sent_avg: 0,
        Bytes_sent_max: 0,
        Bytes_sent_med: 0,
        Bytes_sent_min: 0,
        Bytes_sent_p95: 0,
        Bytes_sent_sum: 0,
        Lock_time_avg: 0,
        Lock_time_max: 0,
        Lock_time_med: 0,
        Lock_time_min: 0,
        Lock_time_p95: 0,
        Lock_time_sum: 0,
        Lock_time_sum_of_total: 0,
        NoData: false,
        Point: 0,
        Query_count: 2,
        Query_count_of_total: 0.000018053475,
        Query_count_per_sec: 0.000046296296,
        Query_time_avg: 0.00052055,
        Query_time_max: 0.0005561,
        Query_time_med: 0,
        Query_time_min: 0.000485,
        Query_time_p95: 0,
        Query_time_sum: 0.0010411,
        Query_time_sum_of_total: 0.000003999888,
        Query_time_sum_per_sec: 2.4099537e-8,
        Rows_examined_avg: 0,
        Rows_examined_max: 0,
        Rows_examined_med: 0,
        Rows_examined_min: 0,
        Rows_examined_p95: 0,
        Rows_examined_sum: 0,
        Rows_examined_sum_of_total: 0,
        Rows_sent_avg: 0,
        Rows_sent_max: 0,
        Rows_sent_med: 0,
        Rows_sent_min: 0,
        Rows_sent_p95: 0,
        Rows_sent_sum: 0,
        Rows_sent_sum_of_total: 0,
        Ts: '0001-01-01T00:00:00Z'
      },
      Query: {
        Abstract: 'SHOW CREATE TABLE',
        Fingerprint: 'SHOW CREATE TABLE `performance_schema` . `events_statements_history`',
        FirstSeen: '2018-09-23T08:45:59Z',
        Id: 'CED2D0328DC4C22B',
        LastSeen: '2018-09-23T08:45:59Z',
        Status: 'new',
        Tables: null
      },
      Sparks2: [
        {
          NoData: true,
          Point: 0,
          Ts: '2018-09-23T09:59:55Z'
        },
        {
          NoData: true,
          Point: 1,
          Ts: '2018-09-23T09:47:55Z',
        }
      ]
    };
    const spy = spyOn(component.queryDetailsService, 'getQueryDetails').and.returnValue(Promise.resolve(val));
    component.getQueryDetails(component.dbServer.UUID, component.queryParams.queryID, component.fromUTCDate, component.toUTCDate);
    spy.calls.mostRecent().returnValue.then((data) => {
      fixture.detectChanges();
      expect(component.isLoading).toBeFalsy();
      done();
    });
  });

  it('should create jsonExplain if needed data is present in response', (done) => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    const val = {
      Cmd: 'Explain',
      Data: 'eyJDbGFzc2ljIjpbeyJJZCI6MSwiU2VsZWN0VHlwZSI6IlNJTVBMRSIsIlRhYmxlIjoiZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWUiLCJQYXJ0aXRpb25zIjpudWxsLCJDcmVhdGVUYWJsZSI6bnVsbCwiVHlwZSI6IkFMTCIsIlBvc3NpYmxlS2V5cyI6bnVsbCwiS2V5IjpudWxsLCJLZXlMZW4iOm51bGwsIlJlZiI6bnVsbCwiUm93cyI6NTM0LCJGaWx0ZXJlZCI6MTAwLCJFeHRyYSI6bnVsbH1dLCJKU09OIjoie1xuICBcInF1ZXJ5X2Jsb2NrXCI6IHtcbiAgICBcInNlbGVjdF9pZFwiOiAxLFxuICAgIFwiY29zdF9pbmZvXCI6IHtcbiAgICAgIFwicXVlcnlfY29zdFwiOiBcIjUzLjY1XCJcbiAgICB9LFxuICAgIFwidGFibGVcIjoge1xuICAgICAgXCJ0YWJsZV9uYW1lXCI6IFwiZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWVcIixcbiAgICAgIFwiYWNjZXNzX3R5cGVcIjogXCJBTExcIixcbiAgICAgIFwicm93c19leGFtaW5lZF9wZXJfc2NhblwiOiA1MzQsXG4gICAgICBcInJvd3NfcHJvZHVjZWRfcGVyX2pvaW5cIjogNTM0LFxuICAgICAgXCJmaWx0ZXJlZFwiOiBcIjEwMC4wMFwiLFxuICAgICAgXCJjb3N0X2luZm9cIjoge1xuICAgICAgICBcInJlYWRfY29zdFwiOiBcIjAuMjVcIixcbiAgICAgICAgXCJldmFsX2Nvc3RcIjogXCI1My40MFwiLFxuICAgICAgICBcInByZWZpeF9jb3N0XCI6IFwiNTMuNjVcIixcbiAgICAgICAgXCJkYXRhX3JlYWRfcGVyX2pvaW5cIjogXCIyOTJLXCJcbiAgICAgIH0sXG4gICAgICBcInVzZWRfY29sdW1uc1wiOiBbXG4gICAgICAgIFwiRVZFTlRfTkFNRVwiLFxuICAgICAgICBcIkNPVU5UX1NUQVJcIixcbiAgICAgICAgXCJTVU1fVElNRVJfV0FJVFwiXG4gICAgICBdXG4gICAgfVxuICB9XG59IiwiVmlzdWFsIjoiVGFibGUgc2Nhblxucm93cyAgICAgICAgICAgNTM0XG4rLSBUYWJsZVxuICAgdGFibGUgICAgICAgICAgZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWVcbiJ9',
      Error: '',
      Id: '83268a37-947e-4a80-561b-d51b6b0350fa'
    };
    const spy = spyOn(component.queryDetailsService, 'getExplain').and.returnValue(Promise.resolve(val));
    component.getExplain();
    spy.calls.mostRecent().returnValue.then((data) => {
      fixture.detectChanges();
      expect(component.jsonExplain).toBeTruthy();
      done();
    });
  });

  it('should  create error if it presented in response', (done) => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    const val = {
      Cmd: 'Explain',
      Data: 'eyJDbGFzc2ljIjpbeyJJZCI6MSwiU2VsZWN0VHlwZSI6IlNJTVBMRSIsIlRhYmxlIjoiZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWUiLCJQYXJ0aXRpb25zIjpudWxsLCJDcmVhdGVUYWJsZSI6bnVsbCwiVHlwZSI6IkFMTCIsIlBvc3NpYmxlS2V5cyI6bnVsbCwiS2V5IjpudWxsLCJLZXlMZW4iOm51bGwsIlJlZiI6bnVsbCwiUm93cyI6NTM0LCJGaWx0ZXJlZCI6MTAwLCJFeHRyYSI6bnVsbH1dLCJKU09OIjoie1xuICBcInF1ZXJ5X2Jsb2NrXCI6IHtcbiAgICBcInNlbGVjdF9pZFwiOiAxLFxuICAgIFwiY29zdF9pbmZvXCI6IHtcbiAgICAgIFwicXVlcnlfY29zdFwiOiBcIjUzLjY1XCJcbiAgICB9LFxuICAgIFwidGFibGVcIjoge1xuICAgICAgXCJ0YWJsZV9uYW1lXCI6IFwiZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWVcIixcbiAgICAgIFwiYWNjZXNzX3R5cGVcIjogXCJBTExcIixcbiAgICAgIFwicm93c19leGFtaW5lZF9wZXJfc2NhblwiOiA1MzQsXG4gICAgICBcInJvd3NfcHJvZHVjZWRfcGVyX2pvaW5cIjogNTM0LFxuICAgICAgXCJmaWx0ZXJlZFwiOiBcIjEwMC4wMFwiLFxuICAgICAgXCJjb3N0X2luZm9cIjoge1xuICAgICAgICBcInJlYWRfY29zdFwiOiBcIjAuMjVcIixcbiAgICAgICAgXCJldmFsX2Nvc3RcIjogXCI1My40MFwiLFxuICAgICAgICBcInByZWZpeF9jb3N0XCI6IFwiNTMuNjVcIixcbiAgICAgICAgXCJkYXRhX3JlYWRfcGVyX2pvaW5cIjogXCIyOTJLXCJcbiAgICAgIH0sXG4gICAgICBcInVzZWRfY29sdW1uc1wiOiBbXG4gICAgICAgIFwiRVZFTlRfTkFNRVwiLFxuICAgICAgICBcIkNPVU5UX1NUQVJcIixcbiAgICAgICAgXCJTVU1fVElNRVJfV0FJVFwiXG4gICAgICBdXG4gICAgfVxuICB9XG59IiwiVmlzdWFsIjoiVGFibGUgc2Nhblxucm93cyAgICAgICAgICAgNTM0XG4rLSBUYWJsZVxuICAgdGFibGUgICAgICAgICAgZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWVcbiJ9',
      Error: 'error',
      Id: '83268a37-947e-4a80-561b-d51b6b0350fa'
    };
    const spy = spyOn(component.queryDetailsService, 'getExplain').and.returnValue(Promise.resolve(val));
    component.getExplain();
    spy.calls.mostRecent().returnValue.then((data) => {
      fixture.detectChanges();
      expect(component.errExplain).toBeTruthy();
      done();
    });
  });

  it('should parse json in promise data if it not string', (done) => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    const val = {
      Cmd: 'Explain',
      Data: 'eyJDbGFzc2ljIjpbeyJJZCI6MSwiU2VsZWN0VHlwZSI6IlNJTVBMRSIsIlRhYmxlIjoiZXZlbnRzX3dhaXRzX3N1bW1hcnlfZ2xvYmFsX2J5X2V2ZW50X25hbWUiLCJQYXJ0aXRpb25zIjpudWxsLCJDcmVhdGVUYWJsZSI6bnVsbCwiVHlwZSI6IkFMTCIsIlBvc3NpYmxlS2V5cyI6bnVsbCwiS2V5IjpudWxsLCJLZXlMZW4iOm51bGwsIlJlZiI6bnVsbCwiUm93cyI6NTM0LCJGaWx0ZXJlZCI6MTAwLCJFeHRyYSI6bnVsbH1dLCJKU09OIjp7ICAKICAgIkNsYXNzaWMiOlsgIAogICAgICB7ICAKICAgICAgICAgIklkIjoxLAogICAgICAgICAiU2VsZWN0VHlwZSI6IlNJTVBMRSIsCiAgICAgICAgICJUYWJsZSI6ImV2ZW50c193YWl0c19zdW1tYXJ5X2dsb2JhbF9ieV9ldmVudF9uYW1lIiwKICAgICAgICAgIlBhcnRpdGlvbnMiOm51bGwsCiAgICAgICAgICJDcmVhdGVUYWJsZSI6bnVsbCwKICAgICAgICAgIlR5cGUiOiJBTEwiLAogICAgICAgICAiUG9zc2libGVLZXlzIjpudWxsLAogICAgICAgICAiS2V5IjpudWxsLAogICAgICAgICAiS2V5TGVuIjpudWxsLAogICAgICAgICAiUmVmIjpudWxsLAogICAgICAgICAiUm93cyI6NTM0LAogICAgICAgICAiRmlsdGVyZWQiOjEwMCwKICAgICAgICAgIkV4dHJhIjpudWxsCiAgICAgIH0KICAgXSwKICAgIkpTT04iOnsicXVlcnlfYmxvY2siOiB7InNlbGVjdF9pZCI6IDEsICJjb3N0X2luZm8iOiB7InF1ZXJ5X2Nvc3QiOiAiNTMuNjUifSwgICAgInRhYmxlIjogeyJ0YWJsZV9uYW1lIjogImV2ZW50c193YWl0c19zdW1tYXJ5X2dsb2JhbF9ieV9ldmVudF9uYW1lIiwgImFjY2Vzc190eXBlIjogIkFMTCIsICJyb3dzX2V4YW1pbmVkX3Blcl9zY2FuIjogNTM0LCAicm93c19wcm9kdWNlZF9wZXJfam9pbiI6IDUzNCwgImZpbHRlcmVkIjogIjEwMC4wMCIsICAgImNvc3RfaW5mbyI6IHsicmVhZF9jb3N0IjogIjAuMjUiLCAiZXZhbF9jb3N0IjogIjUzLjQwIiwgICAgICAgInByZWZpeF9jb3N0IjogIjUzLjY1IiwgImRhdGFfcmVhZF9wZXJfam9pbiI6ICIyOTJLIn0sICJ1c2VkX2NvbHVtbnMiOiBbIkVWRU5UX05BTUUiLCAiQ09VTlRfU1RBUiIsIlNVTV9USU1FUl9XQUlUIl19ICB9fX19',
      Error: '',
      Id: '83268a37-947e-4a80-561b-d51b6b0350fa'
    };
    const spy = spyOn(component.queryDetailsService, 'getExplain').and.returnValue(Promise.resolve(val));
    component.getExplain();
    spy.calls.mostRecent().returnValue.then((data) => {
      fixture.detectChanges();
      expect(component.jsonExplain).toBeTruthy();
      done();
    });
  });

  it('should be false if promise data is null', (done) => {
    component.dbServer = {
      Created: 'string',
      DSN: 'string',
      Deleted: 'string',
      Distro: 'string',
      Id: 12,
      Name: 'string',
      ParentUUID: 'string',
      Subsystem: 'string',
      UUID: 'string',
      Version: 'string',
      Agent: {
        Created: 'string',
        DSN: 'string',
        Deleted: 'string',
        Distro: 'string',
        Id: 12,
        Name: 'string',
        ParentUUID: 'string',
        Subsystem: 'string',
        UUID: 'string',
        Version: 'string',
      }
    };
    const val = null;
    const spy = spyOn(component.queryDetailsService, 'getExplain').and.returnValue(Promise.resolve(val));
    component.getExplain();
    spy.calls.mostRecent().returnValue.then((data) => {
      fixture.detectChanges();
      expect(component.isExplainLoading).toBeFalsy();
      done();
    });
  });

  it('shoud be true if isAllSelected and isNonExistSelected is false', () => {
    component.isAllSelected = false;
    component.isNotExistSelected = false;
    component.parseParams();
    fixture.detectChanges();
    expect(component.isQueryDataAbsent).toBeTruthy();
  });

  it('shoud be true if var host is not presented', () => {
    component.isAllSelected = false;
    component.isNotExistSelected = false;
    component.queryParams = {
      from: '1527630870872',
      queryID: 'E477191F9BF35C18',
      theme: 'dark',
      to: '1527674070873',
      tz: 'browser',
    };
    component.parseParams();
    fixture.detectChanges();
    expect(component.dbServer).toBeTruthy();
  });

  it('shoud be true if var host is presented, and data in dbserverMap is valid', () => {
    component.isAllSelected = false;
    component.isNotExistSelected = false;
    component.dbServerMap = {
      'MySQL57': {
        'Subsystem': 'mysql',
        'ParentUUID': 'b7ea960bd91b45706ca3e1636467bbf0',
        'Id': 0,
        'UUID': 'a7725644598849416ef6aa1272373452',
        'Name': 'MySQL57',
        'DSN': 'root:***@tcp(localhost:3306)',
        'Distro': 'MySQL Community Server - GPL',
        'Version': '8.0.12',
        'Created': '2018-09-26T08:15:55Z',
        'Deleted': '1970-01-01T00:00:01Z',
        'Agent': {
          'Subsystem': 'agent',
          'ParentUUID': 'b7ea960bd91b45706ca3e1636467bbf0',
          'Id': 0,
          'UUID': '92f18c80631047f0554bf7d3360c1b20',
          'Name': '9b49105d096a',
          'DSN': '',
          'Distro': '',
          'Version': '1.0.5',
          'Created': '2018-09-26T08:15:55Z',
          'Deleted': '0001-01-01T00:00:00Z'
        }
      }
    };
    component.queryParams = {
      from: '1527630870872',
      queryID: 'E477191F9BF35C18',
      theme: 'dark',
      to: '1527674070873',
      tz: 'browser',
      'var-host': 'MySQL57'
    };
    component.parseParams();
    fixture.detectChanges();
    [component.dbServer, component.agent].map(item => expect(item).toBeTruthy());
  });

  it('should call setThemeFromParams if timezone is empty string', () => {
    component.queryParams.tz = '';
    const spy = spyOn(component, 'setTimeZoneFromParams');
    component.setTimeZoneFromParams();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });

  it('should call setThemeFromParams if theme is empty string', () => {
    component.queryParams.theme = '';
    const spy = spyOn(component, 'setThemeFromParams');
    component.setThemeFromParams();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
