import React, {useState} from "react";

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );
    });

    return (
        <div>
            <input
                placeholder="Filter Contact"
                value={filterText}
                onChange={(event) => setFilterText(event.target.value)}
            />
            <ul className="List">
                {filtered.map((contact, index) => (
                    <li key={index}>
                        <span>{contact.fullName}</span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>
            <p>Total Contacts Number ({filtered.length})</p>
        </div>
    );
}

export default List;
