import { Permission } from './permission.struct'
import { ServiceBase } from '@/src/api/service-base'
import permissionList from './permissions'

export class PermissionService extends ServiceBase {
  async getPermissions () {
    const { data: { permissions } } = await this.magician(() => this.r.get('/'), {})
    return permissions.map(Permission).map(item => permissionList[item.section]).filter(v => v)
  }
}

export class PermissionManagerService extends PermissionService {
  async addPermission (permission) {
    await this.magician(() => this.r.post('/', permission), {
      403: '권한이 없습니다.'
    })
  }
}
