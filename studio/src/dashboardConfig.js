export default {
  widgets: [
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
                  buildHookId: '6022a5cfd539c30110d3ff42',
                  title: 'Sanity Studio',
                  name: 'pehel-we-for-you-studio',
                  apiId: 'a7885cdb-1340-4908-87b3-16b0b9c03bbf'
                },
                {
                  buildHookId: '6022a5cffb487f00b29e9f66',
                  title: 'Blog Website',
                  name: 'pehel-we-for-you',
                  apiId: '18dcc53d-93e7-447d-8872-e6688d5cf620'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uvineet53/pehel-we-for-you',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://pehel-we-for-you.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
