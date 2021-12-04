import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';
import { RouteType } from '../../Routes/routetypes';
import styles from './navbar.module.css';

const cx = classNames.bind(styles);

type Props = {
  routes: RouteType[];
};

const Navbar = ({ routes }: Props) => {
  return (
    <div className={cx('navContainer')}>
      <div>
        {routes.map((RouteItem) => {
          return <p key={RouteItem.path}>{RouteItem.label}</p>;
        })}
      </div>
      <div>
        <Router>
          <>
            <Routes>
              {routes.map((RouteItem) => {
                return (
                  <Route
                    path={RouteItem.path}
                    key={RouteItem.path}
                    element={RouteItem.component()}
                  />
                );
              })}
            </Routes>
          </>
        </Router>
      </div>
    </div>
  );
};

export default Navbar;
