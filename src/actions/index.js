import * as mainActions from 'actions/mainActions';
import * as header from 'actions/header';
import * as footer from 'actions/footer';

const actions = {
  ...mainActions,
  ...header,
  ...footer,
};

export default actions;
