import { Service } from 'egg';

import { Model, BuildOptions } from 'sequelize';

interface ServiceOptions {
  name: string
}

export default class BaseService extends Service {
  public model: typeof Model & {
    new(values?: object, options?: BuildOptions): Model;
  };

  constructor(ctx, options: ServiceOptions) {
    super(ctx);
    const { app } = this;
    const { name } = options;
    this.model = app.model[name] || {};
  }

  async query(where = {}, options = {}) {
    const queryOptions = Object.assign({}, options, { where });
    return await this.model.findAll(queryOptions);
  }

  async findOne(where = {}, options = {}) {
    const queryOptions = Object.assign({}, options, { where });
    return await this.model.findOne(queryOptions);
  }

  async create(params) {
    return await this.model.create(params);
  }
}
