// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * This class AmbientNameConflict will be renamed to "Event", which will conflict with
 * the browser's ambient "Event" type.
 * @public
 */
export class AmbientNameConflict<T> {
  /**
   * This function returns the browser's ambient "Event" class.  If the containing class
   * is renamed to Event, then there will be an error here:
   * Generic type 'Event<T>' requires 1 type argument(s)
   */
  public getAmbientEvent(): Event {
    return new Event('ambient');
  }
}
