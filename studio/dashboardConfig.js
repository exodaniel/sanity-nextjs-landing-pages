export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62eb1f3533d8631f1c6c6d67',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zbvsygt6',
                  apiId: '6e196ec7-80fc-4f44-971c-887c612b1ba3'
                },
                {
                  buildHookId: '62eb1f36b63c2d22b41da239',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5cqox9qc',
                  apiId: '782ffb72-b953-4b02-9358-8c2fd191ea88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/exodaniel/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5cqox9qc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
