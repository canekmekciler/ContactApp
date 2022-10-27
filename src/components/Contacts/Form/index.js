import React from "react";
import { useState } from "react";

function Form({ addContact, contacts }) {
    const [form, setForm] = useState({ fullName: "", phone_number: "" });

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (form.fullName === "" || form.phone_number === "") {
            return false;
        }

        addContact([...contacts, form]);

        setForm({ fullName: "", phone_number: "" });
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <input
                    name="phone_number"
                    placeholder="Phone Number"
                    value={form.phone_number}
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    );
}

export default Form;
