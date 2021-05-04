import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseResourceService } from '../../shared/services/base.service';
import { UserEntity } from '../domain/entities/user.entity';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseResourceService<UserEntity> {

  constructor (protected injector: Injector) {
    super(`${environment.url}publishers`, injector, UserEntity.fromJson)
  }
}
