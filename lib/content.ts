export const siteContent = {
  names: {
    her: 'Preethi',
    you: 'Vishwas',
  },
  whatsapp: '+91 7619553503',
  whatsappMessage: `Hi Preethi, I know I messed up. But I want you to know that everyone deserves a second chance—including me. I promise I'll never hurt you again, and I'll make sure nothing ever hurts you. I can't guarantee to be the best, but I'll try to be everything you want. Will you give me another chance?`,
  moments: [
    'The day you told me you liked me while I was dropping you back—best moment I could ever experience.',
    'Our movie date, when I held your hand for the first time. Even though it was only for a few seconds, it felt really good.',
    'The first time you fed me dosa, and you blushed right after. One of the cutest things you ever did.',
    'The way you used to look at me—I miss that a little too much.',
  ],
  reasons: [
    'Everyone deserves a second chance—could you give me one as well',
    'I\'ll never hurt you again or let anything hurt you',
    'I can\'t guarantee to be the best but I\'ll try and be everything you want',
  ],
};

export const whatsappLink = `https://wa.me/${siteContent.whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent(siteContent.whatsappMessage)}`;
