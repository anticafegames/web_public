import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { connectRouter } from 'connected-react-router'

import WindowSettingsReducer, { moduleName as WindowSettingsModule } from '../core/ducks/window-settings'
import AuthenticationReducer, { moduleName as AuthenticationModule } from '../core/ducks/authentication'
import UserReducer, { moduleName as UserModule } from '../core/ducks/user'
import SocketReducer, { moduleName as SocketModule } from '../core/ducks/socket'
import WebRTCReducer, { moduleName as WebRTCModule } from '../core/ducks/webrtc'
import WebRTCRoomReducer, { moduleName as WebRTCRoomModule } from '../core/ducks/webrtc-room'
import WebRTCRoomsReducer, { moduleName as WebRTCRoomsModule } from '../core/ducks/webrtc-rooms'
import WebRTCMessageReducer, { moduleName as WebRTCMessageModule } from '../core/ducks/webrtc-message'
import WebRTCDevicesReducer, { moduleName as WebRTCDevicesModule } from '../core/ducks/webrtc-devices'
import GlobalPreloaderReducer, { moduleName as GlobalPreloaderModule } from '../core/ducks/global-preloader'
import ModalReducer, { moduleName as ModalModule } from '../core/ducks/modal'
import AdminReducer, { moduleName as AdminModule } from '../core/ducks/admin'

import GameCommonReducer, { moduleName as GameCommonModule } from '../core/ducks/games-common'
import GameAddDataReducer, { moduleName as GameAddDataModule } from '../core/ducks/games-add-data' 

export default (history: any) => {

  return combineReducers({
    router: connectRouter(history),
    form,
    [WindowSettingsModule]: WindowSettingsReducer,
    [AuthenticationModule]: AuthenticationReducer,
    [SocketModule]: SocketReducer,
    [WebRTCModule]: WebRTCReducer,
    [WebRTCRoomModule]: WebRTCRoomReducer,
    [WebRTCRoomsModule]: WebRTCRoomsReducer,
    [WebRTCMessageModule]: WebRTCMessageReducer,
    [WebRTCDevicesModule]: WebRTCDevicesReducer,
    [UserModule]: UserReducer,
    [GlobalPreloaderModule]: GlobalPreloaderReducer,
    [ModalModule]: ModalReducer,
    [AdminModule]: AdminReducer, 

    [GameCommonModule]: GameCommonReducer,
    [GameAddDataModule]: GameAddDataReducer
  })
}

