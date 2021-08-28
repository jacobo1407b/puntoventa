import {Error401,Error403,Error404,InfoError} from 'services/Error/error.service';

const error_types = {
    Error401: Error401,
    Error403: Error403,
    Error404: Error404,
    InfoError: InfoError
};

export default error_types;