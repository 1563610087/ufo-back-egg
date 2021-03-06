// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportRedis = require('../../../app/service/redis');
import ExportTemplate = require('../../../app/service/template');
import ExportUser = require('../../../app/service/user');
import ExportWebsite = require('../../../app/service/website');

declare module 'egg' {
  interface IService {
    redis: AutoInstanceType<typeof ExportRedis>;
    template: AutoInstanceType<typeof ExportTemplate>;
    user: AutoInstanceType<typeof ExportUser>;
    website: AutoInstanceType<typeof ExportWebsite>;
  }
}
