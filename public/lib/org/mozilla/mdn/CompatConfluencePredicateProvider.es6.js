// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

foam.CLASS({
  package: 'org.mozilla.mdn',
  name: 'CompatConfluencePredicateProvider',
  extends: 'org.mozilla.mdn.BaseForeignPredicateProvider',

  imports: ['creationContext'],

  properties: [
    {
      name: 'from',
      factory: function() {
        return this.creationContext.lookup('org.mozilla.mdn.generated.CompatRow');
      },
    },
    {
      name: 'to',
      factory: function() {
        return this.creationContext.lookup('org.mozilla.mdn.generated.ConfluenceRow');
      },
    },
  ],
});
