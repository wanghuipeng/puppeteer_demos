const devices = require('puppeteer/DeviceDescriptors')
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.emulate(devices['iPhone X'])

    await page.goto('http://www.baidu.com')
    await page.type('#index-kw', 'puppeteer')
    await page.click('#index-bn')

    await page.screenshot({
        path: 'C:/Users/pc/Desktop/temp/baidu_iphone_X_search_puppeteer.png'
    })
})()