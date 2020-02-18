import { createAction, props } from '@ngrx/store';
import { ActiveUser } from '@chat/model';

export const SetActiveUsers = createAction('Set Active Users', props<{ users: ActiveUser[] }>())