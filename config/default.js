module.exports = {
    port: 8086,
    session: {
        secret: 'myBlog',
        key: 'myBlog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myBlog1'
}
