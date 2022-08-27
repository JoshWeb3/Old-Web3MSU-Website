import React from "react";

import redhawk from "../../../assets/redhawktokennew.png";

export const Airdrop = () => {
  return (
    <div className="donate">
      <h1>Redhawk Token Airdrop Event 🎉</h1>
      <img src={redhawk} className="redhawk"></img>
      <h3>
        Claim 20 free Redhawk Tokens by sending us your ETH wallet address
      </h3>
      <div className="hl"></div>
      <br />
      All you need to do is post your ethereum address in our discord server in
      💬︱general-chat
      <br />
      <br />
      OR
      <br />
      <br />
      DM us on any of our social medias
      <br />
      <br />
      <div className="hl"></div>
      <br />
      <i>expires June 10/2022</i>
    </div>
  );
};
