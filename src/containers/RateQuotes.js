import { connect } from "react-redux";
import RateQuotes from "./../components/RateQuotes/";

const mapStateToProps = state => {
  return {
    rates: state.rates,
    isFetchingRates: state.isFetchingRates
  };
};

export default connect(mapStateToProps)(RateQuotes);
