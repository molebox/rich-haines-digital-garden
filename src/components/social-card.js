import getShareImage from '@jlengstorf/get-share-image';

const socialCard = ({ title, tags }) =>
  getShareImage({
    title,
    tagline: tags.map((tag) => `• ${tag}`).join(' '),
    cloudName: 'richardhaines',
    imagePublicID: 'social-card/social-card-garden',
    textAreaWidth: 1193,
    textLeftOffset: 100,
    titleFontSize: 60,
    titleBottomOffset: 210,
    titleGravity: 'north_west',
    taglineGravity: 'north_west',
    titleFont: 'Gagalin-Regular.ttf',
    taglineFont: 'Gagalin-Regular.ttf',
    taglineTopOffset: 547,
    taglineFontSize: 30,
    textColor: '9B5DE5',
    version: 'v1599074590',
  });

export default socialCard;
