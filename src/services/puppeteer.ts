import puppeteer from 'puppeteer';

export async function getPrices() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');

    const notebookElements = await page.$$('.thumbnail');

    let notebooks = [];

    for (const notebookElement of notebookElements) {
        const title = await notebookElement.$eval('a.title', (element) => element.getAttribute('title'));
        const price = await notebookElement.$eval('.price', (element: any) => element.innerText);
        const description = await notebookElement.$eval('.description', (element: any) => element.innerText);
        const ratings = await notebookElement.$eval('.ratings', (element: any) => element.innerText);
        const stars = await notebookElement.$eval('.ratings p:nth-child(2)', (element) => element.getAttribute('data-rating'))

        const parsedStars = parseFloat(stars || "0")
        const parsedPrice = parseFloat(price.replaceAll("$", ""))
        const formattedRatings = ratings.replaceAll("\n", "").trim()

        notebooks.push({ title, description, price: parsedPrice, ratings: formattedRatings, stars: parsedStars });
    }

    await browser.close();

    const sortedNotebooks = notebooks.sort((a, b) => b.price - a.price);
    return sortedNotebooks
}

