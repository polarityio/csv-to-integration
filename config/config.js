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
  defaultColor: 'light-gray',
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
  logging: {
    level: 'info'
  },
  request: {
    cert: '',
    key: '',
    passphrase: '',
    ca: '',
    proxy: ""
  },
  options: []
};
