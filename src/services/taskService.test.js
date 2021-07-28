import axios from 'axios';
import * as taskService from './taskService';

taskService.getAccessToken = jest.fn();

describe('TaskService unit tests', () => {
  test('request interceptor adds the access token to header', () => {
    const result = taskService.axiosInstance.interceptors.request.handlers[0].fulfilled(
      {
        headers: {},
      }
    );
    expect(result.headers).toHaveProperty('Authorization');
  });
});
