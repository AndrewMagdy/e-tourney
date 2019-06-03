import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { formatDate } from "../utils/dateUtils";
import { makeStyles } from "@material-ui/core/styles";

import LocationIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import countryCodes from "../constants/countryCodes";

const useStyles = makeStyles(theme => ({
  seriesSection: {
    margin: theme.spacing(3, 1, 1)
  }
}));

const TourneyDetail = ({ tourney, tourneyId, getTourney, isLoading }) => {
  const classes = useStyles();

  useEffect(() => {
    getTourney(tourneyId);
  }, [getTourney, tourneyId]);

  if (isLoading || !tourney || Object.keys(tourney).length === 0) {
    return <CircularProgress />;
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h3">
            Tournament: {tourney.name}
          </Typography>
          <List aria-label="Tournament">
            <ListItem>
              <ListItemIcon>
                <LocationIcon />
              </ListItemIcon>
              <ListItemText
                primary={countryCodes[tourney.country]}
                secondary={tourney.city}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
              <ListItemText
                primary={`Starting: ${formatDate(tourney.date_start)}`}
                secondary={`Ending: ${formatDate(tourney.date_end)}`}
              />
            </ListItem>
          </List>
          <Divider variant="middle" />
          <div className={classes.seriesSection}>
            <Typography variant="h5" component="h5">
              Series: {tourney.series.name}
            </Typography>
            <List aria-label="Series">
              <ListItem>
                <ListItemIcon>
                  <DateRangeIcon />
                </ListItemIcon>
                <ListItemText
                  primary={`Starting: ${formatDate(tourney.series.date_start)}`}
                  secondary={`Ending: ${formatDate(tourney.series.date_end)}`}
                />
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TourneyDetail;
