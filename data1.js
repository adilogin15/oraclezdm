  export const SOURCE_DB_VERSION = [
    { value: '< 11.2.0.3', label: '< 11.2.0.3'},
    { value: '11.2.0.3', label: '11.2.0.3'},
    { value: '11.2.0.4', label: '11.2.0.4'},
    { value: '12cR1', label: '12cR1'},
    { value: '12cR2', label: '12cR2'},
  ];
  
  export const PLATFORM_FAMILY = [
    { value: 'Big Endian', label: 'Big Endian' },
    { value: 'Little Endian', label: 'Little Endian' },
  ];
  
  export const OS_PLATFORM = [
    { value: 'OS Platform', label: 'OS Platform' , isDisabled: true },
    { value: 'Linux x86-64', label: 'Linux x86-64' },
    { value: 'Not Relavent', label: 'Not Relavent' },
    { value: 'Other Platform', label: 'Other Platform' },
  ];

  export const CDB = [
    { value: 'CDB Value', label: 'CDB Value' , isDisabled: true },
    { value: 'CDB', label: 'CDB' },
    { value: 'NA', label: 'NA' },
    { value: 'NonCDB', label: 'NonCDB' },
  ];

  export const NLS_CS_COMPATIBLE = [
    { value: 'No', label: 'No' },
    { value: 'Yes', label: 'Yes' },
  ];

  export const DB_SIZE = [
    { value: 'LDB', label: 'LDB' },
    { value: 'MDB', label: 'MDB' },
    { value: 'SDB', label: 'SDB' },
    { value: 'VLDB', label: 'VLDB' },
  ];

  export const NETWORK_BANDWIDTH = [
    { value: 'Cloud Storage', label: 'Cloud Storage' },
    { value: 'Dedicated VPN', label: 'Dedicated VPN' },
  ];

  export const TARGET_DB = [
    { value: 'IaaS', label: 'IaaS' },
    { value: 'PaaS', label: 'PaaS' },
  ];

  export const TARGET_DB_VERSION = [
    { value: 'Target DB Version', label: 'Target DB Version' , isDisabled: true },
    { value: '11gR2', label: '11gR2' },
    { value: '12cR1', label: '12cR1' },
    { value: '12cR2', label: '12cR2' },
  ];
  
  export const PERMISSIBLE_DT = [
    { value: 'DNC', label: 'DNC' },
    { value: 'LDT', label: 'LDT' },
    { value: 'MDT', label: 'MDT' },
  ];

  export const linked_CDB1 = [
    { value: 'NA', label: 'NA' },
  ];

  export const linked_CDB2 = [
    { value: 'CDB', label: 'CDB' },
    { value: 'NON-CDB', label: 'NON-CDB' },
  ];

  export const linked_TARGET_DB_VERSION1 = [
    { value: '11gR2', label: '11gR2' },
    { value: '12cR1', label: '12cR1' },
    { value: '12cR2', label: '12cR2' },
  ];

  export const linked_TARGET_DB_VERSION2 = [
    { value: '12cR1', label: '12cR1' },
    { value: '12cR2', label: '12cR2' },
  ];

  export const linked_OS_PLATFORM1 = [
    { value: 'Not Relevant', label: 'Not Relevant' },
  ];

  export const linked_OS_PLATFORM2 = [
    { value: 'Linux x86-64', label: 'Linux x86-64' },
    { value: 'Other Platform', label: 'Other Platform' },
  ];
//   export const MIGRATION_METHOD = [
//     { value: 'DNC', label: 'DNC' },
//     { value: 'LDT', label: 'LDT' },
//     { value: 'MDT', label: 'MDT' },
//   ];