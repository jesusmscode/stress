import request from 'supertest';
import {server} from "../src";

describe('HTTP Server', () => {
    let app: any;

    beforeAll((done) => {
        app = server.listen(8080, done);
    });

    afterAll((done) => {
        app.close(done);
    });

    it('should bind to port 8080 and respond with 200', async () => {
        const response = await request(app)
            .get('/')
            .expect(200)
            .expect('Content-Type', /text\/plain/);

        expect(response.text).toBe('Hello, World!');
    });

});
