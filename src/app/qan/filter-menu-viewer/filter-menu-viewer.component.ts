import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetProfileBody, QanProfileService } from '../profile/qan-profile.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { FilterMenuService } from '../filter-menu/filter-menu.service';
import { FiltersService } from '../../pmm-api-services/services/filters.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter-menu-viewer',
  templateUrl: './filter-menu-viewer.component.html',
  styleUrls: ['./filter-menu-viewer.component.css']
})
export class FilterMenuViewerComponent implements OnInit, OnDestroy {

  public currentParams: GetProfileBody;
  private filterSubscription$: Subscription;
  private getFilters$: Subscription;
  public filters: any = [];

  constructor(
    private filterMenuService: FilterMenuService,
    private filterService: FiltersService,
    private qanFilterService: FilterMenuService,
    private qanProfileService: QanProfileService,
  ) {
    this.currentParams = this.qanProfileService.getProfileParams.getValue();

    this.getFilters$ = this.filterService.Get(
      {
        period_start_from: this.currentParams.period_start_from,
        period_start_to: this.currentParams.period_start_to
      }
    ).pipe(
      map(response => this.filterMenuService.generateFilterGroup(response))
    ).subscribe(
      filters => {
        this.filters = filters;
        this.filterMenuService.updateAutocompleteFilters(filters)
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.getFilters$.unsubscribe();
    this.filterSubscription$.unsubscribe();
  }
}