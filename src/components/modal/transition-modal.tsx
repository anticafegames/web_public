import React from 'react'
import { TransitionMotion, presets, spring, TransitionStyle, TransitionPlainStyle } from 'react-motion'

interface iTransitionModalProps {
    children: (config: TransitionPlainStyle, className?: string, styled?: any) => JSX.Element
    showModal: boolean
    className?: string
    styled?: any
}

export default class TransitionModal extends React.Component<iTransitionModalProps> {

    constructor(props: iTransitionModalProps) {
        super(props)

        this.className = props.className
    }

    componentWillReceiveProps(nextProps: iTransitionModalProps) {
        if(nextProps.className && nextProps.className !== this.className) {
            this.className = nextProps.className
        }
        
        if(nextProps.styled && (nextProps.styled.styledComponentId !== (this.styled && this.styled.styledComponentId))) {
            this.styled = nextProps.styled
        }
    }

    render() {

        const { showModal, children } = this.props

        let styles: TransitionStyle[] = []

        if(!showModal && !this.lastElement) {
            return null
        }

        if (showModal) {
            styles = [{
                key: 'modal',
                style: {
                    scale: spring(1),
                    opacity: spring(1),
                    opacityOverlay: spring(0.5)
                },
                data: null
            }]
        }

        return (
            <TransitionMotion
                willLeave={this.willLeave}
                willEnter={this.willEnter}
                styles={styles}>
                {config => this.renderModal(config)!}
            </TransitionMotion>
        )
    }

    willLeave = () => ({
        scale: spring(0.6),
        opacity: spring(0),
        opacityOverlay: spring(0),
        leave: 1
    })

    willEnter = () => ({
        scale: 0.6,
        opacity: 0.5,
        opacityOverlay: 0
    })

    lastElement?: JSX.Element
    className?: string
    styled?: any

    renderModal = (config: TransitionPlainStyle[]) => {
        
        if(config.length && config[0].style.leave === 1 && config[0].style.opacity < 0.2) {
            this.lastElement = undefined
            return null
        } 

        if(config.length) {
            this.lastElement = this.props.children(config[0], this.className, this.styled)
            return this.lastElement
        } 

        if(this.lastElement) {
            return this.lastElement
        }

        return null
    }
}

