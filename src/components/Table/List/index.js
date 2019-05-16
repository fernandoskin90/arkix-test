import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function FolderList(props) {
  const { classes, items } = props;
  return (
    <List className={classes.root}>
      {items.map(item => (
        <ListItem key={item.id}>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText
            primary={item.employee_name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  className="employee-details"
                  color="textPrimary"
                >
                  {item.employee_age} <i>years old</i>
                </Typography>
                <Typography
                  component="span"
                  className="employee-details"
                  color="textPrimary"
                >
                  ${item.employee_salary}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

FolderList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FolderList);
