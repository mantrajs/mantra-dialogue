import methodStubs from './configs/method_stubs';
import actions from './_actions';
import routes from './_routes.jsx';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
