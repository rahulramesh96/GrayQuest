import React from 'react';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
        <ul className="options nav nav-pills">
          <li className="active">
            <a href="#forecast" data-toggle="tab">Forecast</a>
          </li>

          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#"
              role="button" aria-haspopup="true" aria-expanded="false">
              Visualizations<span className="caret"></span>
            </a>

            <ul className="dropdown-menu">
              <li><a href="#forecast_viz" data-toggle="tab">Forecast</a></li>
              
            </ul>
          </li>
        </ul>
    );
  }
}

export default Tabs;
