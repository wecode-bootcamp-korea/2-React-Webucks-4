import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

export function addLoginBodyStyle() {
  document.body.classList.add('Login_body');
}
export function removeLoginBodyStyle() {
  document.body.classList.remove('Login_body');
}
export function addListBodyStyle() {
  document.body.classList.add('List_body');
}
export function removeListBodyStyle() {
  document.body.classList.remove('List_body');
}
export function addDetailBodyStyle() {
  document.body.classList.add('Detail_body');
}
export function removeDetailBodyStyle() {
  document.body.classList.remove('Detail_body');
}

class ScrollIntoView extends PureComponent {
  componentDidMount = () => window.scrollTo(0, 0);

  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };

  render = () => this.props.children;
}

export default withRouter(ScrollIntoView);