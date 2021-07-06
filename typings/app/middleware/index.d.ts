// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportGetIcon = require('../../../app/middleware/getIcon');

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    getIcon: typeof ExportGetIcon;
  }
}
