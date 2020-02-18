import { createAction, props } from '@ngrx/store';
import { ChatUser } from '@chat/model';

export const SetCurrent = createAction('Set Current User', props<ChatUser>())