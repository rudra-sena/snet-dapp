import React from "react";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";

import AlertBox from "../../../../../common/AlertBox";
import StyledButton from "../../../../../common/StyledButton";
import { useStyles } from "./styles";
import MetamaskFlow from "./MetamaskFlow";
import GeneralAccountWallet from "./GeneralAccountWallet";
import Routes from "../../../../../../utility/constants/Routes";
import { walletTypes } from "../../../../../../Redux/actionCreators/UserActions";

const ExpiredSession = ({
  classes,
  handleComplete,
  groupInfo,
  history,
  handlePurchaseError,
  isServiceAvailable,
  wallet,
}) => {
  const handleAddPayment = () => {
    history.push(`/${Routes.USER_PROFILE}`);
  };

  if (wallet.type === walletTypes.GENERAL) {
    return (
      <GeneralAccountWallet
        paymentInfoCardTitle="Channel Balance"
        paymentInfoCardValue="0.06244168"
        paymentInfoCardUnit="AGI"
      />
    );
  }

  if (wallet.type === walletTypes.METAMASK) {
    return (
      <MetamaskFlow
        handleContinue={handleComplete}
        classes={classes}
        groupInfo={groupInfo}
        handlePurchaseError={handlePurchaseError}
        isServiceAvailable={isServiceAvailable}
      />
    );
  }

  return (
    <div className={classes.ExpiredSessionContainer}>
      <AlertBox
        type="warning"
        message="You have used all your free quota for this service.  Please add a payment method to continue using this service. "
      />
      <StyledButton type="blue" btnText="add payment" onClick={handleAddPayment} />
    </div>
  );
};

export default withRouter(withStyles(useStyles)(ExpiredSession));
