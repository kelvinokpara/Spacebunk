import { useParams } from "react-router";
import acctImg from "../assets/Images/create_account.png";
import walletImg from "../assets/Images/connect_wallet.png";
import Input from "../Components/Inputs/Input";
import Button from "../Components/Button";

const AccountsPage = () => {
  const { id } = useParams();
  return (
    <div className="w-screen flex items-center max-sm:flex-col">
      <div>
        <img
          src={
            id === ":login" || id === ":register"
              ? acctImg
              : id === ":wallets"
              ? walletImg
              : ""
          }
          alt=""
        />
      </div>
      <div className="max-lg:pl-10 max-2xl:pl-16 flex flex-col items-start justify-center gap-y-10 max-sm:px-7 max-sm:py-10 ">
        <div>
          <h1 className="font-worksans text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold capitalize mb-5">
            {id === ":register"
              ? "Create Account"
              : id === ":login"
              ? "Login to Account"
              : id === ":wallets"
              ? "Connect Wallet"
              : ""}
          </h1>
          <p className="font-worksans text-xl max-lg:text-lg max-sm:text-base leading-8 max-w-[450px]">
            {id === ":register"
              ? "Welcome! enter your details and start creating, collecting and selling NFTs."
              : id === ":login"
              ? "Welcome back! Verify your account to keep collecting and selling NFTs."
              : id === ":wallets"
              ? "Choose a wallet you want to connect. There are several wallet providers."
              : ""}
          </p>
        </div>
        <div className="flex flex-col gap-y-8 max-sm:w-full">
          <div className="flex flex-col items-center justify-center gap-4 min-w-[250px] max-w-[350px]">
            {/* conditional render for wallet and login/register pages */}
            {id === ":login" || id === ":register" ? (
              <>
                <Input type={"text"} placeholder={"Your username"} />
                <Input type={"email"} placeholder={"Your email address"} />
                <Input type={"password"} placeholder={"Your password"} />
                <Input
                  type={"password"}
                  placeholder={"Confirm your password"}
                />
              </>
            ) : id === ":wallets" ? (
              <>
                <Button btnFill={"outline"} width={"full"} rounded={"md"}>
                  metamask
                </Button>
                <Button btnFill={"outline"} width={"full"} rounded={"md"}>
                  coinbase
                </Button>
                <Button btnFill={"outline"} width={"full"} rounded={"md"}>
                  luno wallet
                </Button>
              </>
            ) : (
              ""
            )}
          </div>
          {/* button conditional rendering */}
          {id === ":login" || id === ":register" ? (
            <Button rounded={"full"} width={"full"}>
              Create Account
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;
