/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-chat-orange-primary',
    'text-chat-orange-secondary',
    'text-chat-purple-primary',
    'text-chat-purple-secondary',
    'text-chat-green-primary',
    'text-chat-green-secondary',

    'bg-chat-orange-primary',
    'bg-chat-orange-secondary',
    'bg-chat-purple-primary',
    'bg-chat-purple-secondary',
    'bg-chat-green-primary',
    'bg-chat-green-secondary',

    'text-primary-gray-1',
    'text-primary-gray-2',
    'text-primary-gray-3',
    'text-primary-gray-4',

    'text-indicator-orange',
    'text-indicator-indigo',
    'text-indicator-red',
    'text-indicator-mustard',

    'bg-sticker-water',
    'bg-sticker-peach',
    'bg-sticker-sand',
    'bg-sticker-mint',
    'bg-sticker-tea',
    'bg-sticker-lilac',
    'bg-sticker-lavender',

    'bg-fab-task',
    'bg-fab-inbox',
  ],
  theme: {
    extend: {
      colors: {
        'chat-orange-primary': 'var(--color-chat-orange-primary)',
        'chat-orange-secondary': 'var(--color-chat-orange-secondary)',
        'chat-purple-primary': 'var(--color-chat-purple-primary)',
        'chat-purple-secondary': 'var(--color-chat-purple-secondary)',
        'chat-green-primary': 'var(--color-chat-green-primary)',
        'chat-green-secondary': 'var(--color-chat-green-secondary)',

        'primary-gray-1': 'var(--color-primary-gray-1)',
        'primary-gray-2': 'var(--color-primary-gray-2)',
        'primary-gray-3': 'var(--color-primary-gray-3)',
        'primary-gray-4': 'var(--color-primary-gray-4)',

        'indicator-orange': 'var(--color-indicator-orange)',
        'indicator-indigo': 'var(--color-indicator-indigo)',
        'indicator-red': 'var(--color-indicator-red)',
        'indicator-mustard': 'var(--color-indicator-mustard)',

        'sticker-water': 'var(--color-sticker-water)',
        'sticker-peach': 'var(--color-sticker-peach)',
        'sticker-sand': 'var(--color-sticker-sand)',
        'sticker-mint': 'var(--color-sticker-mint)',
        'sticker-tea': 'var(--color-sticker-tea)',
        'sticker-lilac': 'var(--color-sticker-lilac)',
        'sticker-lavender': 'var(--color-sticker-lavender)',

        'fab-task': 'var(--color-fab-task)',
        'fab-inbox': 'var(--color-fab-inbox)',
      },
    },
  },
  plugins: [],
};
