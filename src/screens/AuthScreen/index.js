import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Logo from './Logo';
import LoginPanel from './loginPanel';
import { getToken, setTokens } from '../../utils/misc'
import { autoSignIn } from '../../store/actions/user_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AuthScreen extends Component {
    state = {
        logoAnimation: false
    }

    showLogin = () => {
        this.setState({
            logoAnimation: true
        })
    }
    goNext = () => {
        this.props.navigation.navigate('App')
    }
    componentDidMount() {
        getToken((value) => {
            if (value[0][1] === null) {
                this.setState({ loading: false })
            } else {
                this.props.autoSignIn(value[1][1]).then(() => {
                    if (!this.props.User.userData.token) {
                        this.setState({ loading: false })
                    } else {
                        setTokens(this.props.User.userData, () => {
                            this.goNext()
                        })
                    }
                })
            }
        })
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#DA6C6A' }}>
                <View style={styles.container}>
                    <Logo
                        showLogin={this.showLogin}
                    />
                    <LoginPanel
                        show={this.state.logoAnimation}
                        goNext={this.goNext}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        User: state.User
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ autoSignIn }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)