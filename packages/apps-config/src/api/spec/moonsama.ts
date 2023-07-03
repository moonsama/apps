// Copyright 2017-2023 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        AccountId: 'EthereumAccountId',
        Address: 'AccountId',
        LookupSource: 'AccountId',
        Balance: 'u128',
        Account: {
          nonce: 'U256',
          balance: 'u128'
        },
        EthTransaction: 'LegacyTransaction',
        DispatchErrorModule: 'DispatchErrorModuleU8',
        ExtrinsicsSignature: 'EthereumSignature',
        RoundIndex: 'u32',
        EthereumSignature: {
          r: 'H256',
          s: 'H256',
          v: 'U8'
        },
      }
    }
  ]
};

export default definitions;
