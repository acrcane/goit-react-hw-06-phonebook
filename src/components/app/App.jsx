import React from 'react';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/filter";
import { Box } from "./App.style";

const App = () => {

    return (
        <>
            <Box>             
                <h1>Phonebook</h1>
                <ContactForm />
            </Box>

            <Box>  
                <h2>Contacts</h2>
                <Filter />
                <ContactList />        
            </Box> 
        </>
    );
};

export default App;