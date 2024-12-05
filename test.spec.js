// test('Test console.log', cb);

// const arr = [1, 2, 34, 5, 6];

// function cb(name) {
//     console.log('TEST MESSAGE')

// }

const axios = require('axios');

jest.mock('axios');

const mockedPosts = [{
    userId: 99999,
    id: 1,
    title: 'Test title',
    body: 'Test mocked post'
},
{
    userId: 111111,
    id: 2,
    title: 'Test title 2',
    body: 'Test mocked post 2'
}]

axios.get.mockResolvedValue({ data: mockedPosts })
async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response;
}

test('Fetch all posts', async () => {
    const posts = await fetchPosts();
    const posts2 = await fetchPosts();

    //console.log();
    expect(posts.data).toHaveLength(2);
    expect(posts2.data).toHaveLength(2);

})