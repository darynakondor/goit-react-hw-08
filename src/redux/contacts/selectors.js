import { createSelector } from 'reselect';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, filterName) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
