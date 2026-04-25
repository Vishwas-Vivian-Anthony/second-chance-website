export const siteContent = {
  names: {
    her: 'Preethi',
    you: 'Vishwas',
  },
  whatsapp: '+91 7619553503',
  whatsappMessage: `Hi Preethi, I know I messed up. But I want you to know that everyone deserves a second chance—including me. I promise I'll never hurt you again, and I'll make sure nothing ever hurts you. I can't guarantee to be the best, but I'll try to be everything you want. Will you give me another chance?`,
  moments: [
    'Coffee at the park and endless conversations',
    'Your laugh that made everything feel right',
    'Walking through the city without a care',
    'Moments that made me realize you\'re everything',
  ],
  reasons: [
    'Everyone deserves a second chance—could you give me one as well',
    'I\'ll never hurt you again or let anything hurt you',
    'I can\'t guarantee to be the best but I\'ll try and be everything you want',
  ],
};

export const whatsappLink = `https://wa.me/${siteContent.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;
