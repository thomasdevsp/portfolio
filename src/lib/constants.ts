export const IMAGE_HOST_PREFIX = `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`;

export function getPublicS3UrlWithAlternative(endpoint: string | null | undefined, alternative: string): string {
   if (typeof endpoint !== 'string') return alternative;
   let url = new URL(IMAGE_HOST_PREFIX + '/' + endpoint);
   return url.toString();
}
