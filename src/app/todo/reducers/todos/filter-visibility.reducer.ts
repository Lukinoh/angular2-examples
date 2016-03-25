import {Action, Reducer} from '@ngrx/store';

import {EnumVisibilityFilter} from '../../interfaces/visibility-filter.enum';



export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const visibilityFilter: Reducer<any> = (state: EnumVisibilityFilter = EnumVisibilityFilter.SHOW_ACTIVE, action: Action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

