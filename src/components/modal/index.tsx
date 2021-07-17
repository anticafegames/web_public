import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransitionPlainStyle } from 'react-motion'

import { currentModalSelector, closeElement } from '../../core/ducks/modal'
import { iModalParams } from '../../core/ducks/modal/entity/modal-params-entity'

import Styled from './styled'
import TransitionModal from './transition-modal'

const ModalWindow: React.FC = () => {

    const dispatch = useDispatch()

    const modal = useSelector(currentModalSelector)

    const render = modal && modal.render
    const params = modal && modal.params

    const onClickOverlay = () => {

        if (!params || params.canCloseOnOverlay) {
            dispatch(closeElement())
        }
    }

    var styledComponent = !!render && ((params && params.styled) || Styled)

    const component = (config: TransitionPlainStyle, className?: string, styled?: any) =>
        styled && React.createElement(styled, { key: 'modal', className: `modal-window ${className ? className : ''}` },
            <>
                <div className='modal-overlay' style={{ opacity: config.style.opacityOverlay }} onClick={onClickOverlay} />
                <div className={`modal ${!params || params.withFooter ? 'modal-fixed-footer' : ''}`}
                    style={{ scale: config.style.scale, opacity: config.style.opacity, bottom: config.style.bottom }}>
                    {render && render(() => dispatch(closeElement()))}
                </div>
            </>
        )

    return (
        <TransitionModal showModal={!!render} className={params && params.className} styled={styledComponent}>
            {component}
        </TransitionModal>
    )
}

export default ModalWindow