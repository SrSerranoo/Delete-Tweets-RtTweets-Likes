function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
for(var i = 1; i < 500; i++){
document.querySelectorAll('[data-testid="unretweet"]')[0].click()
await sleep(1000)
document.querySelectorAll('[data-testid="unretweetConfirm"]')[0].click()
await sleep(1000)
}
