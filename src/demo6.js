// 演示自动访问百度网站并抓取相关搜索关键词
const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/');

    await page.goto('https://baidu.com');
    await page.type('#kw', '豆瓣', { delay: 100 });
    page.click('#su')
    await page.waitFor(1000);
    const waitForElement = page.waitForSelector('#rs > table > tbody > tr:nth-child(3) > th:nth-child(5) > a', { visible: true, timeout: 3000 }); // 等待 3 秒或者页面显示完成 注释1
    try { // 此处是可能产生例外的语句
        await waitForElement;　
        var kw = [];　 // 注释2
        kw[0] = await page.$eval('#rs > table > tbody > tr:nth-child(1) > th:nth-child(1) > a', el => el.innerHTML); //注释3
        kw[1] = await page.$eval('#rs > table > tbody > tr:nth-child(1) > th:nth-child(3) > a', el => el.innerHTML);
        kw[2] = await page.$eval('#rs > table > tbody > tr:nth-child(1) > th:nth-child(5) > a', el => el.innerHTML);
        kw[3] = await page.$eval('#rs > table > tbody > tr:nth-child(2) > th:nth-child(1) > a', el => el.innerHTML);
        kw[4] = await page.$eval('#rs > table > tbody > tr:nth-child(2) > th:nth-child(3) > a', el => el.innerHTML);
        kw[5] = await page.$eval('#rs > table > tbody > tr:nth-child(2) > th:nth-child(5) > a', el => el.innerHTML);
        kw[6] = await page.$eval('#rs > table > tbody > tr:nth-child(3) > th:nth-child(1) > a', el => el.innerHTML);
        kw[7] = await page.$eval('#rs > table > tbody > tr:nth-child(3) > th:nth-child(3) > a', el => el.innerHTML);
        kw[8] = await page.$eval('#rs > table > tbody > tr:nth-child(3) > th:nth-child(5) > a', el => el.innerHTML);

        console.log('相关搜索关键词：');
        //遍历相关搜索关键词.
        for (var i = 0; i < kw.length; i++) {
            console.log(11, kw[i]);
        }
    } catch (error) {　　 // 此处是负责例外处理的语句
        console.log('网页中没有找到相关搜索');
    } finally {　　 // 此处是出口语句 　　
    }

    //browser.close(); // 关闭退出。可注释掉此行代码，便于观察最后的结果
})();