/**
 * Created by nitesood on 11-Feb-18.
 */

import * as constants from '../common/constants';

export const  ApiUtils = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
      console.log(response);
      throw {
        name: constants.ZOMATO_API_ERROR,
        message: response.message,
        response: response
      };
    }
  }
};

