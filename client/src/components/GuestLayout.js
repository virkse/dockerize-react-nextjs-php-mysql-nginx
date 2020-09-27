import React, {Component} from 'react'

import GuestHeader from '../common/GuestHeader'

class GuestLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <head>
                    <title>Mt app</title>
                </head>
                <div className="root">
                    <GuestHeader />
                    <div className="contents">
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}

export default GuestLayout