import React from 'react';
import { makeStyles, Table, TableContainer } from '@material-ui/core/';
import PropTypes from 'prop-types';
// import { useForm } from '../../../../components/hooks/useForm';
import Loading from '../../../../components/Loading';
import TableHead from './TableHead';
import TableBody from './TableBody';

const useStyles = makeStyles({
  container: {
    padding: '0 40px',
  },
  table: {
    minWidth: 650,
    paddingRight: '10px',
  },
  viewButton: {
    textTransform: 'none',
    fontWeight: '500',
  },
});

const TaskTable = ({ state, actions }) => {
  const classes = useStyles();

  // const formatTableData = () => {
  //   const taskArray = [];
  //   state.categories.map((x) => {
  //     x.tasks.map((t) => taskArray.push(t));
  //     return x;
  //   });
  //   return taskArray;
  // };

  const handleViewTask = (task) => {
    actions.setSelectedTask(task);
    actions.toggleTaskDetail();
  };

  // const tableData = formatTableData();

  const { tasks } = state;
  return tasks ? (
    <>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="task-table">
          <TableHead
            headers={[
              'Task Title',
              'Office',
              'Point of Contact',
              'Verification Required',
              'Details',
            ]}
          />
          <TableBody
            classes={classes}
            tableData={tasks}
            handleViewTask={handleViewTask}
          />
        </Table>
      </TableContainer>
    </>
  ) : (
    <Loading />
  );
};

export default TaskTable;

TaskTable.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
