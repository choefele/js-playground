const fetchData = require('./fetch');

test.skip('fetches data promise', () => {
    return fetchData().then(data => {
        expect(data.url).toEqual("https://httpbin.org/get")
    });
});

test.skip('fetches data async', async () => {
    const data = await fetchData();
    expect(data.url).toEqual("https://httpbin.org/get");
});
