var Minio = require('minio')

// Instantiate the minio client with the endpoint
// and access keys as shown below.


var minioClient = new Minio.Client({
    endPoint: 'play.min.io',
    port: 9000,
    useSSL: true,
    accessKey: 'Q3AM3UQ867SPQQA43P2F',
    secretKey: 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'
});

minioClient.makeBucket('testlive', 'us-east-1', function (err) {
    if (err) return console.log('le bucket était déja présent');
});


var bucket = 'testlive';

var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}

module.exports = {bucket , metaData , minioClient};