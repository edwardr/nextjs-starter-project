import React from 'react';
import Link from 'next/link';
import breadcrumbStyles from '../public/styles/modules/components/breadcrumbs.module.css';

class Breadcrumbs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {base_path} = this.props;
    const {base_name} = this.props;
    const {name} = this.props;
    return(
      <>
      <div className={breadcrumbStyles.breadcrumbs}>
        <ul>
          <li>
            <Link href={base_path}>
              {base_name}
            </Link>
          </li>
          <li>
            {name}
          </li>
        </ul>
      </div>
      </>
    );
  }

}

export default Breadcrumbs;
