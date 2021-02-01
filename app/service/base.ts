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

  async query(params = {}) {
    return await this.model.findAll(params);
  }

  async findOne(params = {}) {
    return await this.model.findOne({
      where: params
    });
  }

  async create(params) {
    return await this.model.create(params);
  }
}
