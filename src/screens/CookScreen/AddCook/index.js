import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Input from '../../../utils/form/input';
import ValidationRules from '../../../utils/form/validationRules';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCook } from '../../../store/actions/cook_actions'


class AddCook extends Component {

    state = {
        hasError: false,
        loading: false,
        modalVisible: false,
        modalSuccess: false,
        errorsArray: [],
        form: {
            category: {
                value: "",
                valid: false,
                name: "category",
                type: "picker",
                options: ['Select a category', 'Salad', 'Soup', 'Desert', 'Chicken'],
                rules: {
                    isRequired: true
                },
                errorMsg: "You need to select a category"
            },
            title: {
                value: "",
                name: "title",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    maxLength: 50
                },
                errorMsg: "You need to enter a title, max of 50 char"
            },
            description: {
                value: "",
                name: "description",
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    maxLength: 200
                },
                errorMsg: "You need to enter a title, max of 200 char"
            },

        }
    }

    updateInput = (name, value) => {
        this.setState({
            hasError: false
        })
        let formCopy = this.state.form;
        formCopy[name].value = value;

        let rules = formCopy[name].rules;
        let valid = ValidationRules(value, rules, formCopy);

        formCopy[name].valid = valid;

        this.setState({
            form: formCopy
        })
    }
    submitFormHandler = () => {
        let isFormValid = true;
        let dataToSubmit = {};
        const formCopy = this.state.form;

        for (let key in formCopy) {
            isFormValid = isFormValid && formCopy[key].valid;
            dataToSubmit[key] = this.state.form[key].value;
        }
        if (isFormValid) {
            this.setState({
                loading: true
            })
            console.log('ok')
        } else {
            let errorsArray = [];
            for (let key in formCopy) {
                if (!formCopy[key].valid) {
                    errorsArray.push(formCopy[key].errorMsg)
                }
            }
            this.setState({
                loading: false,
                hasError: true,
                modalVisible: true,
                errorsArray
            })
        }
    }
    showErrorsArray = errors => (
        errors ?
            errors.map((item, i) => (

                <Text key={i} style={styles.errorItem}> - {item}</Text>

            ))
            : null
    )
    clearErrors = () => {
        this.setState({
            hasError: false,
            modalVisible: false,
            errorsArray: []
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formInputContainer}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.title}>Recipe Add</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text>Select a category</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Input
                                placeholder="Select a category"
                                type={this.state.form.category.type}
                                value={this.state.form.category.value}
                                onValueChange={value => this.updateInput("category", value)}
                                options={this.state.form.category.options}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.secondTitle}>
                            Describe what you are recipe
                        </Text>
                    </View>
                    <View>
                        <Text>Please add the title, be descriptive</Text>
                        <Input
                            placeholder="Enter a title"
                            type={this.state.form.title.type}
                            value={this.state.form.title.value}
                            onChangeText={value => this.updateInput("title", value)}
                            overrideStyle={styles.inputText}
                        />
                    </View>
                    <View>
                        <Input
                            placeholder="Enter the description"
                            type={this.state.form.description.type}
                            value={this.state.form.description.value}
                            onChangeText={value => this.updateInput("description", value)}
                            multiline={true}
                            numberOfLines={4}
                            overrideStyle={styles.inputTextMultiline}
                        />
                    </View>
                    {
                        !this.state.loading ?
                            <TouchableOpacity onPress={this.submitFormHandler} style={styles.button}>
                                <Text style={{ color: "#C76361" }}>
                                    ADD
                                    </Text>
                            </TouchableOpacity>
                            : null
                    }
                    <Modal
                        animationType="slide"
                        visible={this.state.modalVisible}
                        onRequestClose={() => { }}
                    >
                        <View style={styles.errorContainer}>
                            {this.showErrorsArray(this.state.errorsArray)}
                            <TouchableOpacity onPress={this.clearErrors} style={{ alignItems: 'center', borderWidth: 1, borderColor: '#C76361', marginTop: 15, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 5 }}>
                                <Text style={{ color: '#C76361' }}>BACK</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formInputContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    title: {
        fontFamily: 'Roboto-Black',
        fontSize: 30,
        color: '#C76361'
    },
    secondTitle: {
        fontFamily: 'Roboto-Black',
        fontSize: 20,
        color: '#C76361',
        marginTop: 30,
        marginBottom: 30
    },
    inputText: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 0,
        padding: 10,
    },
    inputTextMultiline: {
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 0,
        padding: 10,
        minHeight: 100,
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: '#C76361'
    },
    errorItem: {
        fontFamily: 'Roboto-Black',
        fontSize: 16,
        color: 'red',
        marginBottom: 10
    },
    errorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const mapStateToProps = state => {
    return {
        User: state.User,
        Cook: state.Cook
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addCook }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCook)