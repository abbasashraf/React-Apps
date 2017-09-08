import { ADD_REMINDER } from '../constant';
import { DELETE_REMINDER } from '../constant';
import { CLEAR_REMINDERS } from '../constant'

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in action', action);
    return action;

}

export const clearReminders = () => {
    console.log('Clear all reminders');
    return {
        type: CLEAR_REMINDERS,

    }

}
