export const handleBorderRadiusSize = (radius?: BorderRadius) => {
  switch (radius) {
    case 'sm':
      return 4;
    case 'md':
      return 8;
    case 'lg':
      return 14;
    case 'xl':
      return 18;
    case '2xl':
      return 24;
    case 'full':
      return 9999;

    default:
      return 0;
  }
};

export const handleFontSize = (size?: FontSize) => {
  switch (size) {
    case 'xs':
      return '0.8rem';
    case 'sm':
      return '1rem';
    case 'base':
      return '1.25rem';
    case 'lg':
      return '1.5rem';
    case 'xl':
      return '2rem';
    case '2xl':
      return '2.5rem';
    case '3xl':
      return '3.2rem';
    case '4xl':
      return '5rem';

    default:
      return '1rem';
  }
};

export const handleFontWeight = (weight?: FontWeight) => {
  switch (weight) {
    case 'bold':
      return 'fontWeightBold';
    case 'light':
      return 'fontWeightLight';
    case 'medium':
      return 'fontWeightMedium';
    case 'regular':
      return 'fontWeightRegular';

    default:
      return 'fontWeightRegular';
  }
};

export const makeid = (length: number) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const getSlideWidth = (listLength: number) => {
  if (listLength === 1) {
    return 'calc(100% - 1rem)';
  } else if (listLength === 2) {
    return 'calc((100% / 2) - 1rem)';
  } else {
    return 'calc((100% / 3) - 1rem)';
  }
};

export const imageURLtoBase64 = async (url: string): Promise<string> => {
  const response = await fetch('/api/image-to-base64', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const { dataUrl } = await response.json();
  return dataUrl;
};
