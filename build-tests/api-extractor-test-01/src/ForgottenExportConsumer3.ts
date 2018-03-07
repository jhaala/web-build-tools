// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * The ForgottenExportConsumer3 class relies on the nested ForgottenExportClass.
 */
export namespace NamespaceWithForgottenExport {
  export class ForgottenExportClass {
  }
}

/** @public */
export class ForgottenExportConsumer3 {
  public test3(): NamespaceWithForgottenExport.ForgottenExportClass | undefined {
    return undefined;
  }
}
