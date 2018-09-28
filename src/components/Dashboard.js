import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const Dashboard = ({ user }) => (
  <Card className="container">
    <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!</div>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
