const devices = require('puppeteer/DeviceDescriptors')
const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
    const page = await browser.newPage()
    await page.emulate(devices['iPhone X'])
    await page.goto('http://www.baidu.com')
    await page.screenshot({
        path: 'C:/Users/pc/Desktop/temp/baidu_iphone_X.png'
    })
    await browser.close()
})