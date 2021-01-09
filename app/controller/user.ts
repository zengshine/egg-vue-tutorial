import { Controller } from 'egg';

// Method | Path            | Route Name     | Controller.Action
// -------|-----------------|----------------|-----------------------------
// GET    | /posts          | posts          | app.controllers.posts.index
// GET    | /posts/new      | new_post       | app.controllers.posts.new
// GET    | /posts/:id      | post           | app.controllers.posts.show
// GET    | /posts/:id/edit | edit_post      | app.controllers.posts.edit
// POST   | /posts          | posts          | app.controllers.posts.create
// PATCH  | /posts/:id      | post           | app.controllers.posts.update
// DELETE | /posts/:id      | post           | app.controllers.posts.destroy

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    const { query, params } = ctx;
    const result = service.user.query({
      query,
      params
    });

    ctx.body = result;
    ctx.status = 200;
  }

  async new() {
    this.ctx.logger.debug('user-controller，new');
  }

  async show() {
    this.ctx.logger.debug('user-controller，show');
  }

  async edit() {
    this.ctx.logger.debug('user-controller，edit');
  }

  async create() {
    this.ctx.logger.debug('user-controller，create');
  }

  async update() {
    this.ctx.logger.debug('user-controller，update');
  }

  async destroy() {
    this.ctx.logger.debug('user-controller，destroy');
  }
}

export default UserController;
