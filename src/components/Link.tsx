import * as React from 'react';
import PropTypes from 'prop-types';
import { Props } from '../containers/FilterLink';

class Link extends React.Component<Props, {}> {
  render() {
    const { active, children, onClick } = this.props;
    if (active) {
      return <span>{children}</span>;
    }
    return(
      <a 
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    );
  }
}

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default Link;
