import React, { Component, Fragment } from 'react'

//import 'materialize-css/dist/js/materialize.min'

const scripts: string[] = []

class ExternalScripts extends Component {

    componentDidMount() {

        scripts.forEach(scriptSrc => {

            const script = document.createElement('script')
            script.src = scriptSrc
            script.async = true
            document.body.appendChild(script)

        })
    }

    render = () => <></>
}

export default ExternalScripts
