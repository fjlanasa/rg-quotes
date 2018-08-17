import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { fetchRateQuotes } from "./../actions/";
import { validateForm } from "./../utils/formValidations";
import RateQueryParamsForm from "./../components/RateQueryParamsForm/";

const mapStateToProps = state => ({
  isFetchingRates: state.isFetchingRates
});

const mapDispatchToProps = dispatch => ({
  fetchRateQuotes: queryParameters => dispatch(fetchRateQuotes(queryParameters))
});

let RateQueryParamsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RateQueryParamsForm);

RateQueryParamsFormContainer = reduxForm({
  form: "rateQueryParamsForm",
  validate: validateForm
})(RateQueryParamsFormContainer);

export default RateQueryParamsFormContainer;
