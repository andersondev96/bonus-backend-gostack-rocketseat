'use strict'

const Roles = use('Adonis/Acl/Role')

class RoleController {
  async index () {
    const roles = await Roles.all()

    return roles
  }
}

module.exports = RoleController
