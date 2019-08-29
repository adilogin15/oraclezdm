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
  { value: 'Linux x86-64', label: 'Linux x86-64' },
  { value: 'Not Relavent', label: 'Not Relavent' },
  { value: 'Other Platform', label: 'Other Platform' },
];

export const CDB = [
  { value: 'CDB', label: 'CDB' },
  { value: 'NA', label: 'NA' },
  { value: 'NonCDB', label: 'NonCDB' },
];

export const NLS_CS_COMPATIBLE = [
  { value: 'No', label: 'No' },
  { value: 'Yes', label: 'Yes' },
];

export const DB_SIZE = [
  { value: 'LDB', label: 'Large DBs [LDB] (2TB to 10TB)' },
  { value: 'MDB', label: 'Medium DBs [MDB] (500G to 2TB in Size)' },
  { value: 'SDB', label: 'Small DBs [SDB] (Less than 500G)' },
  { value: 'VLDB', label: 'VLDBs [VLDB] (Larger than 10TB)' },
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
  { value: '11gR2', label: '11gR2' },
  { value: '12cR1', label: '12cR1' },
  { value: '12cR2', label: '12cR2' },
];

export const PERMISSIBLE_DT = [
  { value: 'DNC', label: 'Downtime Not a Constraint [DNC]' },
  { value: 'LDT', label: 'Low Down Time [LDT] (10 Mins to 3 Hours)' },
  { value: 'MDT', label: 'Medium Down Time [HDT] (3 Hours to 24 Hours)' },
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