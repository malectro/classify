import _ from 'lodash';


export default function classify() {
  return _(arguments).map(arg => {
    if (_.isPlainObject(arg)) {
      arg = _.map(arg, (test, name) => (
        test ? name : null
      ));
    }
    return arg;
  }).flatten().without(null).join(' ');
}

