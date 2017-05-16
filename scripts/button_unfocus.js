export default () => {
    console.log('button unfocus')
    // button unfocus
    const buttons = document.querySelectorAll('[class*="button"], button')

    for (const button of buttons){
        button.addEventListener('click', function() {
        this.blur()
        })
    }
}