import {Injectable} from 'angular2/core';

import {Store} from '@ngrx/store';
import {EnumVisibilityFilter} from '../interfaces/visibility-filter.enum';

import {SET_VISIBILITY_FILTER} from '../reducers/filter-visibility.reducer';

@Injectable()
export class VisibilityFilterModel {

  constructor(private store: Store<any>) {
  }

  getVisibilityFilter(): EnumVisibilityFilter {
    return this.store.getState().visibilityFilter;
  }

  setVisibilityFilter(visibility: EnumVisibilityFilter): void {
    this.store.dispatch({
      type: SET_VISIBILITY_FILTER,
      payload: {
        filter: visibility
      }
    })
  }
}
