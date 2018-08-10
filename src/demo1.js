const puppeteer = require('puppeteer')

puppeteer.launch().then(async browser => {
    const page = await browser.newPage()
    await page.goto('http://www.baidu.com')
    await page.screenshot({
        path: 'C:/Users/pc/Desktop/temp/baidu.png'
    })
    await browser.close()
})