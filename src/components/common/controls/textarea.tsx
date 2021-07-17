import React, { Component, Fragment } from 'react'

interface iTextarea {
    id: string
    icon?: string
    name?: string
    label: string
    className?: string
    classNameContainer?: string
}

class Textarea extends Component<iTextarea> {

    public static defaultProps: Partial<iTextarea> = {
        classNameContainer: 'input-field col s12',
        className: 'materialize-textarea'
    }

    render() {
        return (
            <div className={this.props.classNameContainer}>
                <textarea className={this.props.className} name={this.props.name} {...this.props} id={this.props.id}/>
                <label>{this.props.label}</label>
            </div>
        )
    }
}

export default Textarea
