module.exports = {
    name: 'ADFS Error Codes',
    acronym: 'ADFSE',
    //entityTypes: ['*'],
    customTypes: [
      {
        key: 'numericCodes',
        regex: /\d{5,8}/
      },
      {
        key: 'adfsCodes',
        regex: /AADSTS\d{5,6}/
      },

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
      level: 'trace'
    },
    options: []
  };