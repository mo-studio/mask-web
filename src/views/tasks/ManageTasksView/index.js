import React, { useEffect, useReducer } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Page from '../../../components/Page';
import Toolbar from './taskTable/Toolbar';
import SlideOut from '../../../components/SlideOut';
import FormContainer from './form/FormContainer';
import TaskTable from './taskTable/TaskTable';
import * as taskService from '../../../services/taskService';
import DetailContainer from './taskDetail/DetailContainer';
import reducer, { initialState, mapDispatch } from './reducer';
import Snackbar from '../../../components/Snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.background.dark',
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    '& .MuiContainer-root': {
      display: 'flex',
      paddingLeft: '0',
      paddingRight: 0,
    },
    '& .MuiGrid-container': {
      paddingRight: '10px',
      paddingLeft: '10px',
    },
  },
  snackbar: {},
}));

const ManageTasksView = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = mapDispatch(dispatch);

  useEffect(() => {
    taskService.getTasks().then((data) => actions.setTasks(data.tasks));
  }, [state.triggerRender]);

  const handleCloseSnackbar = () => {
    actions.toggleTaskSnackbar();
    taskService.deleteTask(state.selectedTask.id).then((data) => {
      if (data.status !== 200) {
        console.warn('Delete Task Failed');
      }
    });
  };

  const undoClicked = () => {
    actions.triggerRender();
    actions.toggleTaskSnackbar();
  };
  const classes = useStyles();
  return (
    <>
      <Page className={classes.root} title="Tasks">
        <Toolbar handleOpen={actions.toggleTaskForm} />
        <Container maxWidth={false}>
          <TaskTable state={state} actions={actions} />
        </Container>
      </Page>
      <SlideOut isOpen={state.showTaskDetail}>
        <DetailContainer state={state} actions={actions} />
      </SlideOut>
      <FormContainer state={state} actions={actions} />
      <Snackbar
        button={{ text: 'UNDO', onClick: undoClicked }}
        message="Task Deleted"
        onClose={handleCloseSnackbar}
        className={classes.snackbar}
        open={state.showTaskSnackbar}
      />
    </>
  );
};

export default ManageTasksView;
