module.exports = {
    name: 'CSV to Integration',
    acronym: 'CSV',
    entityTypes: ['*'],
    customTypes: [
      {
        key: 'csvLookup',
        regex: /\d{1,6}/
      }
    ],
    onDemandOnly: true,
    styles: ['./styles/int.less'],
    block: {
      component: {
        file: './components/block.js'
      },
      template: {
        file: './templates/block.hbs'
      }
    },
    summary: {
      component: {
        file: './components/summary.js'
      },
      template: {
        file: './templates/summary.hbs'
      }
    },
    logging: {
      level: 'info'
    },
    options: []
  };