const server = require('../src/mocks/server')
const getData = require('../src/index')

describe('mocking with msw', () => {

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('mocking get', async () => {
        const data = await getData()
        expect(data.id).toBe(3)
    })

})