import React from "react";
import './style.css'


class Header extends React.Component {

    render() {
        return <header>
            <div className={'G-container'}>
                <div className={'header'}>
                    <div className={'header-box'}>
                        <strong> <a href="https://www.free-css.com/free-css-layouts/page1">Free CSS Layouts</a>
                        </strong>
                    </div>
                    <div className={'second-part'}>

                        <div className={'left'}>
                            <p>Secondary Column
                            </p>
                        </div>
                        <div className={'centre same'}>
                            <p>Content Here
                            </p>
                        </div>
                        <div className={'right same'}>
                            <p>Content Here
                            </p>
                        </div>

                    </div>
                    <div className={'footer'}>
                        <p>Footer</p>
                    </div>
                </div>
            </div>
        </header>
    }

}



export default Header