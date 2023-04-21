import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    region: 'us-west-1', // Replace with your bucket region
    accessKeyId: 'AKIAZ3IDOUTSWUKWONTL', // Replace with your AWS access key ID
    secretAccessKey: 'PS0WJEffu7Mw1bxLUnexbsAfatXEwkglmdhm408X', // Replace with your AWS secret access key
  });

const getWeaponsFromS3 = async (key) => {
    if(!key) return;
    
    const params = {
        Bucket: 'ac-dev-s3',
        Key: key,
    };

    try {
        const data = await s3.getObject(params);
        const glbFile = new Blob([data.Body], { type: "model/gltf-binary" });
        const gltfUrl = URL.createObjectURL(glbFile);
        console.log(gltfUrl,'gltfurl')
        return gltfUrl;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getWeaponsFromS3;