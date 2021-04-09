import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth'
import styles from './LoginPage.module.css'

export const LoginPage = (props) => {
    return (
        <div className={styles.boxLayout}>
            <div className={styles.box}>
                <button onClick={props.startLogin}>Login with Google</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);