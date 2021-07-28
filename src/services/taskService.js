import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create();

export const getAccessToken = () =>
  window.accessToken ? window.accessToken : 'dummy_token';

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    config.headers = { Authorization: `Bearer ${token}` };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response) => response.data);

export { axiosInstance };

export const formatUnitDropdownOptions = () => ({
  id: 1,
  title: 'Base Wide Task',
});

export const getTasks = async () => {
  try {
    const response = await axiosInstance.get(`${URL}tasks`);
    return response;
  } catch (error) {
    console.warn(`Error: `, error);
  }
};

export const updateTask = async (values) => {
  try {
    const response = await axios.put(`${URL}task/${values.id}`, {
      title: values.title,
      text: values.text,
      categoryID: values.categoryID,
      isFirstDutyStation: values.isFirstDutyStation,
      isFirstTermAirman: values.isFirstTermAirman,
      isOfficer: values.isOfficer,
      verificationRequired: values.verificationRequired,
      location: values.location,
      office: values.office,
      pocName: values.pocName,
      pocPhoneNumber: values.pocPhoneNumber,
      pocEmail: values.pocEmail,
    });
    return response;
  } catch (error) {
    console.warn(`Error: ${error}`);
  }
};

export const createTask = async (values) => {
  const categoryID = values.type || 1;
  try {
    const response = await axios.post(`${URL}task`, {
      title: values.title,
      text: values.text,
      categoryID,
      isFirstDutyStation: values.isFirstDutyStation,
      isFirstTermAirman: values.isFirstTermAirman,
      isOfficer: values.isOfficer,
      verificationRequired: values.verificationRequired,
      location: values.location,
      office: values.office,
      pocName: values.pocName,
      pocPhoneNumber: values.pocPhoneNumber,
      pocEmail: values.pocEmail,
    });
    return response;
  } catch (error) {
    console.warn(`Error: ${error}`);
  }
};

export const deleteTask = async (taskID) => {
  try {
    const response = await axios.delete(`${URL}task/${taskID}`);
    return response;
  } catch (error) {
    console.warn(`Error: ${error}`);
  }
};
