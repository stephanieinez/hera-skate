const path = require('path');


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Get shared resources like navigation
  const { data } = await graphql(`
    {
      hera {
        talkPages {
          talkContent {
            html
          }
          talkTitleText {
            url
          }
        }
        sessionPages {
          sessionContent {
            html
          }
          sessionTitleText {
            url
          }
        }
        workshopPages {
          workshopContent {
            html
          }
          workshopTitleText {
            url
          }
        }
        aboutPages {
          aboutTitleImage {
            url
          }
          aboutContent {
            html
          }
        }
        specialPages {
          specialTitleText {
            url
          }
          specialContent {
            html
          }
        }
      }
    }
  `)

  const talksPagePathname = '/talks';
  const workshopsPagePathname = '/workshops';
  const sessionsPagePathname = '/sessions';
  const aboutPagePathname = '/about';
  const specialPagePathname = '/special';

  // Talks page
  createPage({
    path: talksPagePathname,
    component: path.resolve('./src/templates/content-page.js'),
    context: {
      page: 'Talks',
      titleImage: data.hera.talkPages[0].talkTitleText.url,
      content: data.hera.talkPages[0].talkContent.html
    },
  });

  // Sessions page
  createPage({
    path: sessionsPagePathname,
    component: path.resolve('./src/templates/content-page.js'),
    context: {
      page: 'Sessions',
      titleImage: data.hera.sessionPages[0].sessionTitleText.url,
      content: data.hera.sessionPages[0].sessionContent.html
    },
  });

  // Workshop page
  createPage({
    path: workshopsPagePathname,
    component: path.resolve('./src/templates/content-page.js'),
    context: {
      page: 'Workshops',
      titleImage: data.hera.workshopPages[0].workshopTitleText.url,
      content: data.hera.workshopPages[0].workshopContent.html
    },
  });

  // About page
  createPage({
    path: aboutPagePathname,
    component: path.resolve('./src/templates/content-page.js'),
    context: {
      page: 'About',
      titleImage: data.hera.aboutPages[0].aboutTitleImage.url,
      content: data.hera.aboutPages[0].aboutContent.html
    },
  });

  // Special page
  {
    data.hera.specialPages.length &&
      createPage({
        path: specialPagePathname,
        component: path.resolve('./src/templates/content-page.js'),
        context: {
          page: 'Special',
          titleImage: data.hera.specialPages[0].specialTitleText.url,
          content: data.hera.specialPages[0].specialContent.html
        },
      });
  }
};
