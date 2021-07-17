import Auth from '../../../core/code/api/vk-api/vk-api-helper'
import { login, waitAuthentication } from '../../../code/api/vk-api/vk-api-helper'

Auth.login = login
Auth.waitAuthentication = waitAuthentication