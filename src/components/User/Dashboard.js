import React from 'react';
import Card from '@material-ui/core/Card';

const Dashboard = ({ user }) => (
  <Card className="container">
    <div>Welcome <strong>{user.name}</strong>!</div>
  </Card>
);

export default Dashboard;
