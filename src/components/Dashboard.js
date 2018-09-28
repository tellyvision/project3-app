import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const Dashboard = ({ secretData, user }) => (
  <Card className="container">
    <CardHeader
      title="Dashboard"
      subtheader="You should get access to this page only after authentication."
    />
  {secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</div>}
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
