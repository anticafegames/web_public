import { replace } from 'connected-react-router'

import Router from '../../core/code/common/router'

Router.replace = (path: string) => replace(path)