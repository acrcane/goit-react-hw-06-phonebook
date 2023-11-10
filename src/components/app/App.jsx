import React from 'react';
import { Provider } from 'react-redux';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/filter";
import { store } from 'redux/store';
import { Box } from "./App.style";

const App = () => {

    return (
        <Provider store={store}>
            <Box>             
                <h1>Phonebook</h1>
                <ContactForm />
            </Box>

            <Box>  
                <h2>Contacts</h2>
                <Filter />
                <ContactList />        
            </Box> 
        </Provider>
    );
};

export default App;