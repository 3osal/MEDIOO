// open user information
document.querySelector('.user .btn').onclick = function () {
    let accountInfo = document.querySelector('.user .account-info');
    accountInfo.classList.toggle('open');

    if (accountInfo.classList.contains('open')) {
        document.querySelector('.user .btn').style.color = "#ff0054";
    } else {
        document.querySelector('.user .btn').style.color = "white";
    }
}