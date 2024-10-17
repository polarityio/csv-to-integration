module.exports = {
  name: 'CSV to Integration',
  acronym: 'CSV',
  entityTypes: [
    'IPv4',
    'IPv4CIDR',
    'IPv6',
    'domain',
    'url',
    'MD5',
    'SHA1',
    'SHA256',
    'email',
    'cve',
    'MAC',
    'string'
  ],
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
    proxy: ''
  },
  options: []
};
