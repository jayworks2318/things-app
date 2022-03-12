const React = require('react');
const Default = require('../Default');

class Index extends React.Component {
    render () {
        return (
            <Default>
                <div> 
                    <a href='/user/signup'>
                        <button>signup</button>
                    </a>
                    <a href='/user/login'>
                        <button>login</button>
                    </a>
                    <a href='/user/logout'>
                        <button>logout</button>
                    </a>
                </div>
            </Default>
        )
    }
}

module.exports = Index;