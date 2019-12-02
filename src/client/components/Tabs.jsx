import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="AuxPack" disabled />
          <Tab label="Overview" {...a11yProps(1)} component={Link} to="/"/>
          <Tab label="Build Data" {...a11yProps(2)} component={Link} to="/builds"/>
          <Tab label="Recommendations" {...a11yProps(3)} component={Link} to="/recommendations"/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        Overview
      </TabPanel>
      <TabPanel value={value} index={2}>
        Build Data
      </TabPanel>
      <TabPanel value={value} index={3}>
        Recommendations
      </TabPanel>
      
    </div>
  );
}