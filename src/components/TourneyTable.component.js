import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import tableIcons from "../constants/tableIcons";
import countryCodes from "../constants/countryCodes";
import { formatDate } from "../utils/dateUtils";

const TourneyTable = ({ tourneyList, getTourneys, navToTourney }) => {
  useEffect(() => {
    getTourneys();
    // eslint-disable-next-line
  }, []);

  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Country",
      field: "country",
      render: rowData => (
        <Typography> {countryCodes[rowData.country]}</Typography>
      )
    },
    { title: "City", field: "city" },
    {
      title: "Start Date",
      field: "date_start",
      type: "date",
      render: rowData => (
        <Typography> {formatDate(rowData.date_start)}</Typography>
      )
    },
    {
      title: "End Date",
      field: "date_end",
      type: "date",
      render: rowData => (
        <Typography> {formatDate(rowData.date_end)} </Typography>
      )
    },
    { title: "Series Name", field: "series.name" }
  ];

  return (
    <Grid item xs={12}>
      <MaterialTable
        columns={columns}
        data={tourneyList}
        title="Tournaments"
        icons={tableIcons}
        options={{
          filtering: true
        }}
        onRowClick={(_, rowData) => {
          navToTourney(rowData.id);
        }}
      />
    </Grid>
  );
};

export default TourneyTable;
