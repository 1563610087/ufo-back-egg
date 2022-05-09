// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportTemplate = require('../../../app/controller/template');
import ExportUser = require('../../../app/controller/user');
import ExportWebsite = require('../../../app/controller/website');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    template: ExportTemplate;
    user: ExportUser;
    website: ExportWebsite;
  }
}
