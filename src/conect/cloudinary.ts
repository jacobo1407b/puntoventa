import { v2 as cloudinary } from 'cloudinary';
import { error,info } from 'utils/logger';

export var cloud = cloudinary;
export function loadCloudinary(): void {
    const { CLOUDINARY_API_SECRET, CLOUDINARY_APP_NAME, CLOUDINARY_API_KEY } = process.env;
    if (!CLOUDINARY_API_SECRET) {
        error('Cannot set "API_SECRET" for cloudinary')
    } else if (!CLOUDINARY_APP_NAME) {
        error('Cannot set "CLOUD_NAME" for cloudinary')
    } else if (!CLOUDINARY_API_KEY) {
        error('Cannot set "API_KEY" for cloudinary')
    } else {
        cloud.config({
            cloud_name: CLOUDINARY_APP_NAME,
            api_key: CLOUDINARY_API_KEY,
            api_secret: CLOUDINARY_API_SECRET,
            secure: true
        })
        info('Correct cloudinary settings')
    }
}