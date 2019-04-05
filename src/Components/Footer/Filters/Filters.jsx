import React from 'react';
import FiltersLink from 'containers/FiltersLink';
import { VisibilityFilters } from 'actions/footer';
import style from 'Components/Footer/Filters/Filters.module.scss';

const Filters = () => (
  <ul className={style.filters}>
    <FiltersLink filter={VisibilityFilters.SHOW_ALL} key="all">
      All
    </FiltersLink>
    <FiltersLink filter={VisibilityFilters.SHOW_ACTIVE} key="active">
      Active
    </FiltersLink>
    <FiltersLink filter={VisibilityFilters.SHOW_COMPLETED} key="completed">
      Completed
    </FiltersLink>
  </ul>
);
export default Filters;
