import {NotificationAction} from './notification-action';

export interface Notification<T, D> {
  readonly data: D;
  readonly domain: T;
  readonly entityId: string;
  readonly action: NotificationAction;
}
