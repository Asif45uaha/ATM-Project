let pin = 1234;
let balance = 10000;

document.querySelector(".pin-input").addEventListener("change", (ev) => {
    const token = Number(ev.target.value)
    localStorage.setItem("token", token)
    if (token && token === pin) {
        document.querySelector(".main-pin").style.display = "none";
        document.querySelector(".main").style.display = "flex";
        document.querySelector(".main").style.flexDirection = "column";
        document.querySelector(".main").style.alignItems = "center";
        document.querySelector(".main").style.justifyContent = "center";
        document.querySelector(".main").style.backgroundColor = "crimson";
        document.querySelector(".main").style.width = "100%";
        document.querySelector(".main").style.height = "100vh";
        document.querySelector(".main").style.gap = "30px";
    } else {
        document.querySelector(".wrong-pin-msg").innerHTML = "Please Enter Correct Pin!!!"
        document.querySelector(".pin-input").value = ""
        localStorage.clear()

    }
});
const checkBalance = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".balance-enquiry").style.display = "flex";
    document.querySelector(".balance-enquiry").style.flexDirection =
        "column";
    document.querySelector(".balance-enquiry").style.alignItems = "center";
    document.querySelector(".balance-enquiry").style.justifyContent =
        "center";
    document.querySelector(".balance-enquiry").style.backgroundColor =
        "crimson";
    document.querySelector(".balance-enquiry").style.width = "100%";
    document.querySelector(".balance-enquiry").style.height = "100vh";
    document.querySelector(".balance-enquiry").style.color = "white";
    document.querySelector(".balance-stmt").innerHTML =
        "Dear Customer Your Current balance is: " + balance;
    document.querySelector(".balance-stmt").fontSize = "3rem";
    document.querySelector(".balance-stmt").style.fontWeight = "800";
    document.querySelector(".main-msg").innerHTML = ""
};
const gotoDashboard = () => {
    document.querySelector(".balance-enquiry").style.display = "none";
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".main").style.flexDirection = "column";
    document.querySelector(".main").style.alignItems = "center";
    document.querySelector(".main").style.justifyContent = "center";
    document.querySelector(".main").style.backgroundColor = "crimson";
    document.querySelector(".main").style.width = "100%";
    document.querySelector(".main").style.height = "100vh";
    document.querySelector(".main").style.gap = "30px";
};

const withdrawDomUpdate = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".withdraw").style.display = "flex";
    document.querySelector(".withdraw").style.flexDirection = "column";
    document.querySelector(".withdraw").style.alignItems = "center";
    document.querySelector(".withdraw").style.justifyContent = "center";
    document.querySelector(".withdraw").style.backgroundColor = "crimson";
    document.querySelector(".withdraw").style.width = "100%";
    document.querySelector(".withdraw").style.height = "100vh";
    document.querySelector(".withdraw").style.gap = "30px";
}

const withdraw = () => {
    document.querySelector(".withdraw-input").addEventListener("change", (ev) => {
        if (Number(ev.target.value) <= balance) {
            document.querySelector(".wdraw-stmt").innerHTML =
                `Dear User Requested Amount ${Number(ev.target.value) != 0 ? Number(ev.target.value) : ""} has been Withdrawn SuccessFully!!`
            setTimeout(() => {
                balance = balance - Number(ev.target.value);
                document.querySelector(".main-msg").innerHTML = `Amount ${ev.target.value} has been Withdrawn`
                document
                    .querySelector(".withdraw-input").value = ""
                document.querySelector(".wdraw-stmt").innerHTML = ''
                document.querySelector(".acc-summary").innerHTML = ""
            }, 2000);

        }
        else {
            document.querySelector(".wdraw-stmt").innerHTML = "Invalid Amount!!"
            document
                .querySelector(".withdraw-input").value = ""
            document.querySelector(".acc-summary").innerHTML = ""
        }
    })

    withdrawDomUpdate()
};

const dashboardFromwdraw = () => {
    document.querySelector(".withdraw").style.display = "none";
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".main").style.flexDirection = "column";
    document.querySelector(".main").style.alignItems = "center";
    document.querySelector(".main").style.justifyContent = "center";
    document.querySelector(".main").style.backgroundColor = "crimson";
    document.querySelector(".main").style.width = "100%";
    document.querySelector(".main").style.height = "100vh";
    document.querySelector(".main").style.gap = "30px";

};

const updateDepositDom = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".deposit").style.display = "flex";
    document.querySelector(".deposit").style.flexDirection = "column";
    document.querySelector(".deposit").style.alignItems = "center";
    document.querySelector(".deposit").style.justifyContent = "center";
    document.querySelector(".deposit").style.backgroundColor = "crimson";
    document.querySelector(".deposit").style.width = "100%";
    document.querySelector(".deposit").style.height = "100vh";
    document.querySelector(".deposit").style.gap = "30px";
}
const deposit = () => {
    updateDepositDom()
    document
        .querySelector(".deposit-input")
        .addEventListener("change", (ev) => {
            let depositAmt = Number(ev.target.value)
            if (depositAmt === 0) {
                document.querySelector(".desposit-stmt").innerHTML = "Sorry User You Can't Deposit With Zero"
            }
            else {
                balance = balance + depositAmt;
                document.querySelector(".deposit-stmt").innerHTML =
                    "Dear User You have Deposited: " + depositAmt;

                document
                    .querySelector(".deposit-input").value = ""
            }
            setTimeout(() => {
                document.querySelector(".main-msg").innerHTML = `Amount ${depositAmt} has been Deposited to Your Account`
                // document.querySelector(".deposit-stmt").innerHTML =
                //     ""
                // document.querySelector(".deposit-summary").innerHTML =
                //     ""
            }, 2000)
        });

}

const dashboardFromdeposit = () => {
    document.querySelector(".deposit").style.display = "none";
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".main").style.flexDirection = "column";
    document.querySelector(".main").style.alignItems = "center";
    document.querySelector(".main").style.justifyContent = "center";
    document.querySelector(".main").style.backgroundColor = "crimson";
    document.querySelector(".main").style.width = "100%";
    document.querySelector(".main").style.height = "100vh";
    document.querySelector(".main").style.gap = "30px";

};
const updateLoanDom = () => {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".loan").style.display = "flex";
    document.querySelector(".loan").style.flexDirection = "column";
    document.querySelector(".loan").style.alignItems = "center";
    document.querySelector(".loan").style.justifyContent = "center";
    document.querySelector(".loan").style.backgroundColor = "crimson";
    document.querySelector(".loan").style.width = "100%";
    document.querySelector(".loan").style.height = "100vh";
    document.querySelector(".loan").style.gap = "30px";
}

const applyLoan = () => {
    updateLoanDom()
    document.querySelector(".loan-input").addEventListener("change", (ev) => {
        const loanAmt = Number(ev.target.value)
        setTimeout(() => {
            balance = balance + loanAmt
            document.querySelector(".main-msg").innerHTML = "Dear User Your Loan Amount Has Been Disbursed"
        }, 5000);
        document.querySelector(".loan-stmt").innerHTML =
            `Dear User Your Requested  Loan Amount ${loanAmt} Would be Disbursed in a while`
        document.querySelector(".loan-input").value = ""
    })
}

const dashboardFromloan = () => {
    document.querySelector(".loan").style.display = "none";
    document.querySelector(".main").style.display = "flex";
    document.querySelector(".main").style.flexDirection = "column";
    document.querySelector(".main").style.alignItems = "center";
    document.querySelector(".main").style.justifyContent = "center";
    document.querySelector(".main").style.backgroundColor = "crimson";
    document.querySelector(".main").style.width = "100%";
    document.querySelector(".main").style.height = "100vh";
    document.querySelector(".main").style.gap = "30px";
}

const goBack = () => {
    localStorage.removeItem("token")
    document.querySelector(".main").style.display = "none";
    document.querySelector(".main-pin").style.display = "flex";
    document.querySelector(".main-pin").style.flexDirection = "column";
    document.querySelector(".main-pin").style.alignItems = "center";
    document.querySelector(".main-pin").style.justifyContent = "center";
    document.querySelector(".main-pin").style.backgroundColor = "crimson";
    document.querySelector(".main-pin").style.width = "100%";
    document.querySelector(".main-pin").style.height = "100vh";
    document.querySelector(".main-pin").style.gap = "30px";
    document.querySelector(".pin-input").value = ""

}