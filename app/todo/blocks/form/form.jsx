import React, { Component } from "react"
import connectForm from "react-form-to-props"

import styles from "./form.styl"

class Form extends Component {
  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
  };
  _submit( ev ){
    ev.preventDefault()
    this.props.onSubmit( this.props.form )
    this.props.resetForm()
  }
  render(){
    const text = this.props.form && this.props.form.text;
    return <form ref="form" className={ styles.form } onSubmit={ this._submit.bind( this ) }>
      <textarea className={ styles.field } valueLink={ this.props.bindAs( "text" ) }></textarea>
      <button
        className={ styles.control }
        disabled={ !text }
      >Add todo</button>
    </form>;
  }
}
export default connectForm( Form );
