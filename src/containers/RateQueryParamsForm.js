import React from "react"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { requestRates } from "./../actions/"
import { validateForm } from "./../utils/formValidations"
import RateQueryParamsForm from "./../components/RateQueryParamsForm/"

const mapStateToProps = (state) => ({
  isFetchingRates: state.isFetchingRates
});

const mapDispatchToProps = (dispatch) => ({
  requestRates: (queryParams) => dispatch(requestRates())
});

let RateQueryParamsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RateQueryParamsForm)

RateQueryParamsFormContainer = reduxForm({
  form: "rateQueryParamsForm",
  validate: validateForm,
  touchOnBlur: false
})(RateQueryParamsFormContainer);

export default RateQueryParamsFormContainer;
