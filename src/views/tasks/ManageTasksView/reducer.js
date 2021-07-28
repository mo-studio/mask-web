export const initialState = {
  tasks: [],
  selectedTask: {},
  status: 'idle',
  editMode: false,
  showTaskForm: false,
  showTaskDetail: false,
  showTaskModal: false,
  triggerRender: false,
  showConfirmDeleteModal: false,
  showTaskSnackbar: false,
};

const types = {
  SET_TASKS: 'SET_TASKS',
  SET_EDIT_ON: 'SET_EDIT_ON',
  SET_EDIT_OFF: 'SET_EDIT_OFF',
  TRIGGER_RENDER: 'TRIGGER_RENDER',
  SET_STATUS_IDLE: 'SET_STATUS_IDLE',
  TOGGLE_TASK_FORM: 'TOGGLE_TASK_FORM',
  SET_STATUS_ERROR: 'SET_STATUS_ERROR',
  TOGGLE_TASK_MODAL: 'TOGGLE_TASK_MODAL',
  SET_SELECTED_TASK: 'SET_SELECTED_TASK',
  TOGGLE_TASK_DETAIL: 'TOGGLE_TASK_DETAIL',
  SET_STATUS_PENDING: 'SET_STATUS_PENDING',
  LAZY_DELETE_TASK: 'LAZY_DELETE_TASK',
  DELETE_TASK: 'DELETE_TASK',
  TOGGLE_CONFIRM_DELETE_MODAL: 'TOGGLE_CONFIRM_DELETE_MODAL',
  TOGGLE_TASK_SNACKBAR: 'TOGGLE_TASK_SNACKBAR',
};

export const mapDispatch = (dispatch) => ({
  setTasks: (data) => dispatch({ type: types.SET_TASKS, payload: data }),
  setEditModeOn: () => dispatch({ type: types.SET_EDIT_ON }),
  setEditModeOff: () => dispatch({ type: types.SET_EDIT_OFF }),
  toggleTaskForm: () => dispatch({ type: types.TOGGLE_TASK_FORM }),
  toggleConfirmDeleteModal: () =>
    dispatch({ type: types.TOGGLE_CONFIRM_DELETE_MODAL }),
  toggleTaskDetail: () => dispatch({ type: types.TOGGLE_TASK_DETAIL }),
  toggleTaskSnackbar: () => dispatch({ type: types.TOGGLE_TASK_SNACKBAR }),
  toggleTaskModal: () => dispatch({ type: types.TOGGLE_TASK_MODAL }),
  triggerRender: () => dispatch({ type: types.TRIGGER_RENDER }),
  setStatusPending: () => dispatch({ type: types.SET_STATUS_PENDING }),
  setStatusIdle: () => dispatch({ type: types.SET_STATUS_IDLE }),
  setStatusError: () => dispatch({ type: types.SET_STATUS_ERROR }),
  setSelectedTask: (data) =>
    dispatch({ type: types.SET_SELECTED_TASK, payload: data }),
  lazyDeleteTask: ({ taskID }) =>
    dispatch({
      type: types.LAZY_DELETE_TASK,
      payload: { taskID },
    }),
});

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case types.SET_SELECTED_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case types.SET_EDIT_ON:
      return {
        ...state,
        editMode: true,
      };
    case types.SET_EDIT_OFF:
      return {
        ...state,
        editMode: false,
      };
    case types.TOGGLE_TASK_FORM:
      return {
        ...state,
        showTaskForm: !state.showTaskForm,
      };
    case types.TOGGLE_TASK_DETAIL:
      return {
        ...state,
        showTaskDetail: !state.showTaskDetail,
      };
    case types.TOGGLE_TASK_MODAL:
      return {
        ...state,
        showTaskModal: !state.showTaskModal,
      };
    case types.TRIGGER_RENDER:
      return {
        ...state,
        triggerRender: !state.triggerRender,
      };
    case types.SET_STATUS_PENDING:
      return {
        ...state,
        status: 'pending',
      };
    case types.SET_STATUS_IDLE:
      return {
        ...state,
        status: 'idle',
      };
    case types.SET_STATUS_ERROR:
      return {
        ...state,
        status: 'error',
      };
    case types.LAZY_DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskID),
      };
    case types.TOGGLE_CONFIRM_DELETE_MODAL:
      return {
        ...state,
        showConfirmDeleteModal: !state.showConfirmDeleteModal,
      };
    case types.TOGGLE_TASK_SNACKBAR:
      return {
        ...state,
        showTaskSnackbar: !state.showTaskSnackbar,
      };
    default:
  }
};

export default reducer;
