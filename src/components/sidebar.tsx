import * as React from 'react';
import '../styles/sidebar.scss';

type Props = {
  open: boolean,
  // toggle: (e: string) => void,
  title: string
}

export class Sidebar extends React.Component<Props> {
  render() {
    const open = this.props.open ? 'open' : 'closed';

    return (
      <div className={`sidebar ${open}`} >
        <div className={`sidebar ${open}`} >
          <div className='header'>
            <h3 className='title'>{this.props.title}</h3>
          </div>
          <div className='content'>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;