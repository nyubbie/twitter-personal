/*Stored Twitter Script for cleaner outlook on HTML code*/
new TWTR.Widget({
  version: 2,
  type: 'search',
  search: '@renoywk renoywk',
  interval: 30000,
  title: '',
  subject: '',
  width: 250,
  height: 300,
  theme: {
    shell: {
      background: '#000000',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#444444',
      links: '#1985b5'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: true,
    behavior: 'all'
  }
}).render().start();