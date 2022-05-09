// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTemplate = require('../../../app/model/template');
import ExportUser = require('../../../app/model/user');
import ExportWebsite_1 = require('../../../app/model/website_1');
import ExportWebsite_2 = require('../../../app/model/website_2');
import ExportWebsite_3 = require('../../../app/model/website_3');

declare module 'egg' {
  interface IModel {
    Template: ReturnType<typeof ExportTemplate>;
    User: ReturnType<typeof ExportUser>;
    Website_1: ReturnType<typeof ExportWebsite_1>;
    Website_2: ReturnType<typeof ExportWebsite_2>;
    Website_3: ReturnType<typeof ExportWebsite_3>;
  }
}
